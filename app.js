var app = angular.module('app', ['ngAnimate']);

app.factory('Utils00', function($http, $interval) {
  var ii = 0,
    jj = 0,
    kk = 0,
    ss = "",
    aa = [],
    jsonData = [],
    BBstatsLog = "";

  function tally00(tt, xx, s$) {

    if (s$.Gm.f) {
      s$.Gm.t = "/";
    } else {
      s$.Gm.t = "|";
    }
    s$.Gm.f = !s$.Gm.f; // just a blip

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

}); // end service Utils00

app.controller('Ctrl1', function($scope, $http, $interval, Utils00) {
  $scope.navM00 = false;
  $scope.Gm = {
    clockSS: 0,
    vClock: "00:00",
    pMax: 10,
    f: true,
    e: false,
    inG: false,
    t: "|"
  };
  $scope.BBstatsLog = "";
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
    inG: 0,
    outG: 0,
    totPss: 0,
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

  $scope.xxTimes = function(nn) {
    return Utils00.xxTimes(nn);
  };

  $scope.showLog = function() {
    $scope.Gm.e = true;
    $scope.BBstatsLog = Utils00.showLog($scope);
  };
  $scope.pTally = function(tt, xx) {
    Utils00.tally(tt, xx, $scope);
  };

  $scope.menuTgl = function(mm) {
    $scope.navM00 = !$scope.navM00;
    switch (mm) {
      case 'm1':
        $scope.showLog();
        angular.element('#mainM02').modal({
          keyboard: false
        });
        break;
      case 'm2':
        angular.element('#mainM01').modal({
          keyboard: false
        });
        break;
      default:
        break;
    }
  };
  $scope.pTgl = function(ii) {
    $scope.vP[ii].onc = !$scope.vP[ii].onc;
    if ($scope.vP[ii].onc) {
      $scope.vP[ii].inG = $scope.Gm.clockSS;
    } else {
      $scope.vP[ii].outG = $scope.Gm.clockSS;
      $scope.vP[ii].totPss += $scope.vP[ii].inG - $scope.vP[ii].outG;
    }
  };

  // Game Clock - track in seconds;  display min:sec
  var gameClock;
  $scope.vClock = function(sec) {
    var ss = ":";
    ss = String(Math.trunc(sec / 60)) + ":";
    sec = sec % 60;
    if (sec < 10) {
      ss += "0";
    }
    ss += String(sec);
    return ss;
  };
  $scope.stopGame = function() {
    if (angular.isDefined(gameClock)) {
      $interval.cancel(gameClock);
      gameClock = undefined;
    }
  };
  $scope.resetGame = function() {
    $scope.stopGame();
    $scope.Gm.clockSS = $scope.Gm.pMax * 60;
    $scope.Gm.vClock = $scope.vClock($scope.Gm.clockSS);
  };
  $scope.$on('$destroy', function() {
    // Make sure that the interval is destroyed too
    $scope.stopGame();
  });
  $scope.inGame = function() {
    if (angular.isDefined(gameClock)) return; // skip if clock is already running
    gameClock = $interval(function() {
      $scope.Gm.clockSS--;
      if ($scope.Gm.clockSS <= 0) {
        $scope.stopGame();
      }
      $scope.Gm.vClock = $scope.vClock($scope.Gm.clockSS);
    }, 1000);
  }; // end inGame

}); // end Ctrl1
