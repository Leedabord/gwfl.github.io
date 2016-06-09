var app = angular.module('app', ['ngAnimate']);

app.factory('gscUtils', function($http, $interval, $timeout) {
  var ii = 0, jj = 0, kk = 0, ss = "", aa = [], jsonData = [], BBstatsLog = "", gameClock = "";

  function tally00(tt, xx, s$) {

    if (s$.zpT.f) {
      s$.zpT.t = "//";
    } else {
      s$.zpT.t = "||";
    }
    s$.zpT.f = !s$.zpT.f; // just a blip

    switch (tt) {
      case 'y2p':
        s$.vP[xx].pp += 2;
        s$.vGH.pp += 2;
        s$.vP[xx].y2p++;
        s$.vP[xx].rrfg = Math.round(((s$.vP[xx].y2p + s$.vP[xx].y3p) / (s$.vP[xx].x2p + s$.vP[xx].y2p + s$.vP[xx].x3p + s$.vP[xx].y3p)) * 100);
        break;
      case 'x2p':
        s$.vP[xx].x2p++;
        s$.vP[xx].rrfg = Math.round(((s$.vP[xx].y2p + s$.vP[xx].y3p) / (s$.vP[xx].x2p + s$.vP[xx].y2p + s$.vP[xx].x3p + s$.vP[xx].y3p)) * 100);
        break;
      case 'y3p':
        s$.vP[xx].pp += 3;
        s$.vGH.pp += 3;
        s$.vP[xx].y3p++;
        s$.vP[xx].rr3p = Math.round((s$.vP[xx].y3p / (s$.vP[xx].x3p + s$.vP[xx].y3p)) * 100);
        s$.vP[xx].rrfg = Math.round(((s$.vP[xx].y2p + s$.vP[xx].y3p) / (s$.vP[xx].x2p + s$.vP[xx].y2p + s$.vP[xx].x3p + s$.vP[xx].y3p)) * 100);
        break;
      case 'x3p':
        s$.vP[xx].x3p++;
        s$.vP[xx].rr3p = Math.round((s$.vP[xx].y3p / (s$.vP[xx].x3p + s$.vP[xx].y3p)) * 100);
        s$.vP[xx].rrfg = Math.round(((s$.vP[xx].y2p + s$.vP[xx].y3p) / (s$.vP[xx].x2p + s$.vP[xx].y2p + s$.vP[xx].x3p + s$.vP[xx].y3p)) * 100);
        break;
      case 'yft':
        s$.vP[xx].pp++;
        s$.vGH.pp++;
        s$.vP[xx].yft++;
        s$.vP[xx].rrft = Math.round((s$.vP[xx].yft / (s$.vP[xx].xft + s$.vP[xx].yft)) * 100);
        break;
      case 'xft':
        s$.vP[xx].xft++;
        s$.vP[xx].rrft = Math.round((s$.vP[xx].yft / (s$.vP[xx].xft + s$.vP[xx].yft)) * 100);
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

  // return options
  return {
    init: function(s$) {
      return init00();
    },
    showLog: function(s$) {
      ss = JSON.stringify(s$.vP);
      return ss;
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
  };

});

app.controller('Ctrl1', function($scope, $http, $interval, $timeout, gscUtils) {

  $scope.xxTimes = function(nn) {
    return gscUtils.xxTimes(nn);
  };

  $scope.init00 = function() {
    $scope.name = 'Game In Progress:';

    $scope.vGH = {
      pp: 0,
      ff: 0,
      tt: 0
    };
    $scope.vGV = angular.copy($scope.vGH);

    $scope.vP = [{
      "Nm": "xxxxx",
      "Nu": "99",
      "onc": false,
      pp: 0,
      pf: 0,
      rrfg: 0,
      rr3p: 0,
      rrft: 0,
      y2p: 0,
      x2p: 0,
      y3p: 0,
      x3p: 0,
      yft: 0,
      xft: 0,
      ast: 0,
      stl: 0,
      drb: 0,
      orb: 0,
      tov: 0,
      blk: 0,
      tf: 0
    }];
    $http.get('players.json').success(function(jsonData) {
      $scope.vP = angular.copy(jsonData);
    });

    $scope.BBstatsLog = "";
    $scope.zpT = {
      f: true,
      t: "||"
    };

  };

  $scope.pTally = function(tt, xx) {
    gscUtils.tally(tt, xx, $scope);
  };

  $scope.pTgl = function(ii) {
    $scope.vP[ii].onc = !$scope.vP[ii].onc;
  };

  $scope.showLog = function() {
    //  $scope.BBstatsLog = gscUtils.showLog($scope);
  };

  var gameClock;
  $scope.minutes = 10;  $scope.seconds = 0;
  $scope.inGame = function() {
  // Don't start a new clock if already running
  if ( angular.isDefined(gameClock) ) return;
    gameClock = $interval(function() {
      $scope.seconds--;
      if ($scope.seconds < 0) {
        $scope.minutes--;
        $scope.seconds = 59;
      }
    }, 1000);
  };

  $scope.stopGame = function() {
    if (angular.isDefined(gameClock)) {
      $interval.cancel(gameClock);
      gameClock = undefined;
    }
  };

  $scope.resetGame = function() {
    $scope.stopGame();
    $scope.minutes = 10;
    $scope.seconds = 0;
  };

  $scope.$on('$destroy', function() {
    // Make sure that the interval is destroyed too
    $scope.stopGame();
  });

}); // end Ctrl1
