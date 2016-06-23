// ID, Japanese display name, English display name, clockwise info, counter-clockwise info
var Station = function(id, japaneseName, englishName, cw, ccw) {
  this.id = id;
  this.japaneseName = japaneseName;
  this.englishName = englishName;
  this.cw = cw;
  this.ccw = ccw;
};

var YamanoteLine = {};

YamanoteLine.stations = {
  tokyo: new Station('tokyo', '東京', 'Tōkyō', {
    melody: 'jr-sh3',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'jr-sh3',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  yurakucho: new Station('yurakucho', '有楽町', 'Yūrakuchō', {
    melody: 'jr-sh2',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'jr-sh2',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  shimbashi: new Station('shimbashi', '新橋', 'Shimbashi', {
    melody: 'gota-de-vient',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'gota-de-vient',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  hamamatsucho: new Station('hamamatsucho', '浜松町', 'Hamamatsuchō', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  tamachi: new Station('tamachi', '田町', 'Tamachi', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  shinagawa: new Station('shinagawa', '品川', 'Shinagawa', {
    melody: 'umi-no-eki',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  osaki: new Station('osaki', '大崎', 'Ōsaki', {
    melody: 'sf-3',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'sf-1',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  gotanda: new Station('gotanda', '五反田', 'Gotanda', {
    melody: 'ciello-estrellado',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'jr-sh2',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  meguro: new Station('meguro', '目黒', 'Meguro', {
    melody: 'dance-on',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'water-crown',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  ebisu: new Station('ebisu', '恵比寿', 'Ebisu', {
    melody: 'jr-sh1',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'jr-sh2',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  shibuya: new Station('shibuya', '渋谷', 'Shibuya', {
    melody: 'hana-no-horokobi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'ogawa-no-seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  harajuku: new Station('harajuku', '原宿', 'Harajuku', {
    melody: 'harajuku-b',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'harajuku-a',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  yoyogi: new Station('yoyogi', '代々木', 'Yoyogi', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  shinjuku: new Station('shinjuku', '新宿', 'Shinjuku', {
    melody: 'twilight',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'aratana-kisetsu',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  shinokubo: new Station('shinokubo', '新大久保', 'Shin-Ōkubo', {
    melody: 'bell-a',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'bell-b',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  takadanobaba: new Station('takadanobaba', '高田馬場', 'Takadanobaba', {
    melody: 'tetsuwan-atom-a',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'tetsuwan-atom-b',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  mejiro: new Station('mejiro', '目白', 'Mejiro', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  ikebukuro: new Station('ikebukuro', '池袋', 'Ikebukuro', {
    melody: 'springbox',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'melody',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  otsuka: new Station('otsuka', '大塚', 'Ōtsuka', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  sugamo: new Station('sugamo', '巣鴨', 'Sugamo', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  komagome: new Station('komagome', '駒込', 'Komagome', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  tabata: new Station('tabata', '田端', 'Tabata', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  nishinippori: new Station('nishinippori', '西日暮里', 'Nishi-Nippori', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  nippori: new Station('nippori', '日暮里', 'Nippori', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  uguisudani: new Station('uguisudani', '鶯谷', 'Uguisudani', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  ueno: new Station('ueno', '上野', 'Ueno', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  okachimachi: new Station('okachimachi', '御徒町', 'Okachimachi', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'haru',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  akihabara: new Station('akihabara', '秋葉原', 'Akihabara', { // Melodies may be reversed
    melody: 'springbox',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'ogawa-no-seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }),

  kanda: new Station('kanda', '神田', 'Kanda', {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  }, {
    melody: 'seseragi',
    timeAtStation: 10000,
    timeToNextStation: 15000
  })
};

YamanoteLine.route = {
  cw: [
    YamanoteLine.stations.ikebukuro,
    YamanoteLine.stations.otsuka,
    YamanoteLine.stations.sugamo,
    YamanoteLine.stations.komagome,
    YamanoteLine.stations.tabata,
    YamanoteLine.stations.nishinippori,
    YamanoteLine.stations.nippori,
    YamanoteLine.stations.uguisudani,
    YamanoteLine.stations.ueno,
    YamanoteLine.stations.okachimachi,
    YamanoteLine.stations.akihabara,
    YamanoteLine.stations.kanda,
    YamanoteLine.stations.tokyo,
    YamanoteLine.stations.yurakucho,
    YamanoteLine.stations.shimbashi,
    YamanoteLine.stations.hamamatsucho,
    YamanoteLine.stations.shinagawa,
    YamanoteLine.stations.osaki,
    YamanoteLine.stations.gotanda,
    YamanoteLine.stations.meguro,
    YamanoteLine.stations.ebisu,
    YamanoteLine.stations.shibuya,
    YamanoteLine.stations.harajuku,
    YamanoteLine.stations.yoyogi,
    YamanoteLine.stations.shinjuku,
    YamanoteLine.stations.shinokubo,
    YamanoteLine.stations.takadanobaba,
    YamanoteLine.stations.mejiro
  ],
  ccw: [
    YamanoteLine.stations.ikebukuro,
    YamanoteLine.stations.mejiro,
    YamanoteLine.stations.takadanobaba,
    YamanoteLine.stations.shinokubo,
    YamanoteLine.stations.shinjuku,
    YamanoteLine.stations.yoyogi,
    YamanoteLine.stations.harajuku,
    YamanoteLine.stations.shibuya,
    YamanoteLine.stations.ebisu,
    YamanoteLine.stations.meguro,
    YamanoteLine.stations.gotanda,
    YamanoteLine.stations.osaki,
    YamanoteLine.stations.shinagawa,
    YamanoteLine.stations.hamamatsucho,
    YamanoteLine.stations.shimbashi,
    YamanoteLine.stations.yurakucho,
    YamanoteLine.stations.tokyo,
    YamanoteLine.stations.kanda,
    YamanoteLine.stations.akihabara,
    YamanoteLine.stations.okachimachi,
    YamanoteLine.stations.ueno,
    YamanoteLine.stations.uguisudani,
    YamanoteLine.stations.nippori,
    YamanoteLine.stations.nishinippori,
    YamanoteLine.stations.tabata,
    YamanoteLine.stations.komagome,
    YamanoteLine.stations.sugamo,
    YamanoteLine.stations.otsuka
  ]
};
