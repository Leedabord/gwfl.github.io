var app = angular.module('app', [] );

app.factory('gscUtils', function($http, $timeout) {
var ii = 0;  var jj = 0;  var kk = 0;  var ss = "";  var aa = [];  var jsonData = [];

var h1 = document.getElementsByTagName('time')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 60, minutes = 9, hours = 0,
    t;

function add() {
    seconds--;
    if (seconds <= 0) {
        seconds = 60;
        minutes--;
        if (minutes <= 0) {
            minutes = 60;
            hours--;
        }
    }
    
    h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();

/* Start button */
start.onclick = timer();

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
};

/* Clear button */
clear.onclick = function() {
    h1.textContent = "10:00";
    seconds = 60; minutes = 9; hours = 0;
};

function tally00(tt, xx, s$) {

 switch (tt) {
  case 'y2p':
    s$.vP[xx].pp += 2;
    s$.vGH.pp += 2;
    s$.vP[xx].y2p++;
    break;
  case 'x2p':
    s$.vP[xx].x2p++;
    break;
  case 'y3p':
    s$.vP[xx].pp += 3;
    s$.vGH.pp += 3;
    s$.vP[xx].y3p++;
    break;
  case 'x3p':
    s$.vP[xx].x3p++;
    break;
  case 'yft':
    s$.vP[xx].pp++;
    s$.vGH.pp++;
    s$.vP[xx].yft++;
    break;
  case 'xft':
    s$.vP[xx].xft++;
    break;
  case 'ast':
    s$.vP[xx].ast++;
    break;
  case 'stl':
    s$.vP[xx].stl++;
    break;
  case 'blk':
    s$.vP[xx].blk++;
    break;
  case 'drb':
    s$.vP[xx].drb++;
    break;
  case 'orb':
    s$.vP[xx].orb++;
    break;
  case 'tov':
    s$.vP[xx].tov++;
    break;
  case 'pf':
    s$.vP[xx].pf++;
    s$.vGH.ff++;
    break;
  case 'tf':
    s$.vP[xx].tf++;
    break;
  case 'tf':
    s$.vP[xx].tf++;
    break;
  case 'tf':
    s$.vP[xx].tf++;
    break;
  case 'v2p':
    s$.vGV.pp += 2;
    break;
  case 'v3p':
    s$.vGV.pp += 3;
    break;
  case 'vft':
    s$.vGV.pp++;
    break;
  case 'vpf':
    s$.vGV.ff++;
    break;
  default:
    break;
 }
}

function aaTimes(nn) {
  var ii = 0;
  var aa = [];
  for (ii = 0; ii < nn; ii++) {
    if (arguments.length > 1) { 
      aa[ii] = arguments[1];
      } else {
      aa[ii] = ii;
      }
  }
  return aa;
}

  function gSSii(ss, ii) {
    var aa = [];
    aa = ss.split(',');
    return aa[ii];
  }
  function spliceSSii(ss, ii, val) {
    var aa = [];
    aa = ss.split(',');
    aa[ii] = String(val);
    ss = aa.join();
    return ss;
  }

// return options
  return {
    init: function(s$) {
      return init00();
    },
    match: function() {
      return "match:: ";
    },
    tally: function(tt, xx, s$) {
      return tally00(tt, xx, s$);
    },
    xxTimes: function(nn) {
      return aaTimes(nn);
    },
    http: function(callback) {
      $http.get('players.json').success(function(jsonData) {
        return jsonData.data;
      });
    }
//      $http.get('players.json').success(function (jsonData) {
//        return jsonData;
//      });
  };

});

app.factory("UserService", function() {
  var users = ["Peter", "Daniel", "Nina"];

  return {
    allU: function() {
      return users;
    },
    first: function(xx) {
      if (xx > users.length) { xx = users.length;}
      return users[xx-1];
    }
  };
});

app.controller('Ctrl1', function($scope, $http, $timeout, gscUtils, UserService) {

$scope.xxTimes = function(nn) {
  return gscUtils.xxTimes(nn);
};

$scope.init00 = function() {
  $scope.name = 'Game In Progress:';

  $scope.vGH = {
    pp: 0,  ff: 0,  tt: 0
  };
  $scope.vGV = angular.copy($scope.vGH);

  vP00 = { pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 
  };

$scope.vP = [
  { "Nm": "Nathan",  "Nu": "00", "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 },
  { "Nm": "Ilari-xx",  "Nu": "2" , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0   },
  { "Nm": "Trent",  "Nu": "3" , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0   },
  { "Nm": "Kadin",  "Nu": "5" , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0   },
  { "Nm": "Devian",  "Nu": "6", "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0    },
  { "Nm": "A T",  "Nu": "8"  , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0  },
  { "Nm": "Bryan M",  "Nu": "11"  , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0  },
  { "Nm": "Damien",  "Nu": "13"  , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0  },
  { "Nm": "Aidan M",  "Nu": "13x"  , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0  },
  { "Nm": "Sean",  "Nu": "14"  , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0  },
  { "Nm": "Sam",  "Nu": "16", "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0    },
  { "Nm": "Evan",  "Nu": "22"  , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0  },
  { "Nm": "Kajh",  "Nu": "23"  , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0  },
  { "Nm": "xxxxx",  "Nu": "99"  , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0  },
  { "Nm": "xxxxx",  "Nu": "99"  , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0  },
  { "Nm": "xxxxx",  "Nu": "99"  , "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0  },
  { "Nm": "Tyler",  "Nu": "27", "onc": false, 
   pp: 0,  pf: 0,
    y2p: 0, x2p: 0, y3p: 0, x3p: 0, 
    yft: 0, xft: 0, ast: 0, stl: 0, 
    drb: 0, orb: 0, tov: 0, blk: 0, tf: 0    }
];

  $http.get('players.json').success(function (jsonData) {
    $scope.vP = angular.copy(jsonData);
  });

};

$scope.pTally = function (tt, xx) {
    console.log('pTally::', tt, xx, $scope.vP);
    gscUtils.tally(tt, xx, $scope);
}; 

$scope.pTgl = function(ii) {
  $scope.vP[ii].onc = !$scope.vP[ii].onc;
 };

});  // end Ctrl1
