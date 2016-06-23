var Rider = function() {
  this.currentDirection = 'cw';
};

Rider.prototype.select = function(station) {
  if (this.currentStationId === station.id) {
    console.log("Stop");
    this.setNextStation(null);
    this.setCurrentStation(null);
  } else {
    if (!!this.currentStationId) {
      // Currently playing, make transition.
      console.log("Switch");
      this.setNextStation(station);

      // Gracefully end any playing sounds?

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

  this.setCurrentStation(nextStation);

  this.setNextStation(null);
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

  // Play departure jingle...

  var nextStation = this.getNextStation();
  this.setNextStation(nextStation);
};
