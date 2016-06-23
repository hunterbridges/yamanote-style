$(document).ready(function() {
  var htmlForStation = function(station) {
    var html = '<a class="station" href="#" id="'+station.id+'"><div class="square"></div><div class="name"><div class="japanese">'+station.japaneseName+'</div><div class="english">'+station.englishName+'</div></div></a>';
    return html;
  }

  var buildDom = function() {
    // Loop through stations and generate elements.
    _(YamanoteLine.route.cw).each(function (station) {
        var html = htmlForStation(station);
        station.$el = $(html);
    });
  };

  var $topArea = $('#top-area');
  var $bottomArea = $('#bottom-area');
  var $leftArea = $('#left-area');
  var $rightArea = $('#right-area');

  var layout = function() {
    // Lulz. This can be sped up by diffing instead of emptying.
    $topArea.empty();
    $bottomArea.empty();
    $leftArea.empty();
    $rightArea.empty();

    var weight = 0.75;
    var tbRatio = weight * $topArea.innerWidth() / (weight * $topArea.innerWidth() + $rightArea.innerHeight());
    var tbCount = Math.floor(YamanoteLine.route.cw.length * tbRatio)
    var lrCount = YamanoteLine.route.cw.length - tbCount;
    var tCount = Math.floor(tbCount / 2.0);
    var bCount = Math.ceil(tbCount / 2.0);
    var lCount = Math.floor(lrCount / 2.0);
    var rCount = Math.ceil(lrCount / 2.0);

    var i = 0;
    for (var j = 0; j < tCount; j++, i++) {
      var station = YamanoteLine.route.cw[i];
      $topArea.append(station.$el);
    }

    for (var j = 0; j < rCount; j++, i++) {
      var station = YamanoteLine.route.cw[i];
      $rightArea.append(station.$el);
    }

    for (var j = 0; j < bCount; j++, i++) {
      var station = YamanoteLine.route.cw[i];
      $bottomArea.append(station.$el);
    }

    for (var j = 0; j < lCount; j++, i++) {
      var station = YamanoteLine.route.cw[i];
      $leftArea.append(station.$el);
    }
  };

  var registerEvents = function(rider) {
    // Add interactivity to the DOM elements
    $(window).resize(function () {
      layout();
    });

    $('#interface-layer').delegate('a.station', 'click', function(e) {
      var stationId = $(e.currentTarget).attr("id");
      var station = YamanoteLine.stations[stationId];
      rider.select(station);
    });
  };

  var rider = new Rider();
  buildDom();
  layout();
  registerEvents(rider);
});
