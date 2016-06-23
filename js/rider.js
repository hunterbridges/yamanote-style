var Rider = function() {
  this.currentDirection = 'cw';
  this.melodies = {};
  this.announcements = {};
};

Rider.prototype.select = function(station) {
  if (!!this.enqueuedAction) {
    clearTimeout(this.enqueuedAction);
    this.enqueuedAction = null;
  }

  if (this.currentStationId === station.id) {
    console.log("Stop");
    this.setNextStation(null);
    this.setCurrentStation(null);

    this.currentAudio.stop();
    this.currentAudio = null;
  } else {
    if (!!this.currentStationId) {
      // Currently playing, make transition.
      console.log("Switch");
      this.setNextStation(station);

      // Gracefully end any playing sounds?
      this.currentAudio.stop();
      this.currentAudio = null;

      this.arriveAtNextStation();
    } else {
      // Not playing. Start from scratch.
      console.log("Start");
      this.setCurrentStation(station);
      this.departCurrentStation();
    }
  }
};

Rider.prototype.setNextStation = function(station) {
  $('a.station.tsugi').removeClass('tsugi');
  if (!!station) {
    this.nextStationId = station.id;
    station.$el.addClass('tsugi');
  } else {
    this.nextStationId = null;
  }
};

Rider.prototype.setCurrentStation = function(station) {
  var prevStation = YamanoteLine.stations[this.currentStationId];
  if (!!prevStation) {
    prevStation.$el.removeClass('current');
  }

  if (!!station) {
    this.currentStationId = station.id;
    station.$el.addClass('current');
  } else {
    this.currentStationId = null;
  }
}

Rider.prototype.arriveAtNextStation = function() {
  if (!this.nextStationId) {
    return;
  }

  var nextStation = YamanoteLine.stations[this.nextStationId];
  var currentStation = YamanoteLine.stations[this.currentStationId];

  var announcement = this.getArrivalAnnouncement(nextStation);
  var rider = this;
  rider.currentAudio = announcement;
  announcement.play().bind('ended', function() {
    rider.currentAudio = null;

    rider.setCurrentStation(nextStation);
    rider.setNextStation(null);

    rider.enqueuedAction = setTimeout(function() {
      rider.departCurrentStation();
    }, nextStation[rider.currentDirection].timeAtStation);

    announcement.unbind('ended');
  });
};

Rider.prototype.getNextStation = function() {
  var haystack = YamanoteLine.route[this.currentDirection];
  var currentId = this.currentStationId;

  var i = _(haystack).findIndex(function (station) {
    return station.id == currentId;
  });

  if (i === -1) {
    return null;
  }

  var nextI = i + 1;
  if (nextI >= haystack.length) {
    nextI = 0;
  }

  return haystack[nextI];
}

Rider.prototype.departCurrentStation = function() {
  if (!this.currentStationId) {
    return;
  }

  var currentStation = YamanoteLine.stations[this.currentStationId];

  var melody = this.getDepartureMelody(currentStation, this.currentDirection);
  var rider = this;
  rider.currentAudio = melody;
  melody.play().bind('ended', function() {
    rider.currentAudio = null;

    var nextStation = rider.getNextStation();
    rider.setNextStation(nextStation);

    rider.enqueuedAction = setTimeout(function() {
      rider.arriveAtNextStation();
    }, currentStation[rider.currentDirection].timeToNextStation);

    melody.unbind('ended');
  });
};

Rider.prototype.getMelody = function(melodyName) {
  if (!!this.melodies[melodyName]) {
    return this.melodies[melodyName];
  } else {
    var melody = new buzz.sound('/audio/melody/'+melodyName, {formats: ["mp3", "ogg"]});
    this.melodies[melodyName] = melody;
    return melody;
  }
}

Rider.prototype.getDepartureMelody = function(station, direction) {
  if (!station.departureMelodies) {
    station.departureMelodies = {};
  }

  if (!station.departureMelodies[direction]) {
    var melodyName = station[direction].melody;
    var melody = this.getMelody(melodyName);
    station.departureMelodies[direction] = melody;
    return melody;
  }

  return station.departureMelodies[direction];
};

Rider.prototype.getAnnouncement = function(announcementName) {
  if (!!this.announcements[announcementName]) {
    return this.announcements[announcementName];
  } else {
    var announcement = new buzz.sound('/audio/announce/'+announcementName, {formats: ["mp3", "ogg"]});
    this.announcements[announcementName] = announcement;
    return announcement;
  }
}

Rider.prototype.getArrivalAnnouncement = function(station) {
  if (!station.arrivalAnnouncement) {
    var announcementName = station.id;
    var announcement = this.getAnnouncement(announcementName);
    station.arrivalAnnouncement = announcement;
    return announcement;
  }

  return station.arrivalAnnouncement;
};

