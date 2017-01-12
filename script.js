var ionApp = angular.module('ionAppH', ['ionic', 'ngResource']);

ionApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/menu.html"
    })
    .state('eventmenu.main', {
      url: "/main",
      views: {
        'menuContent' :{
          templateUrl: "templates/main.html",
          controller: "MainCtrl"
        }
      }
    })
    .state('eventmenu.page1', {
      url: "/page1",
      views: {
        'menuContent' :{
          templateUrl: "templates/page1.html",
          controller: "MainCtrl"
        }
      }
    })
    .state('eventmenu.page2', {
      url: "/page2",
      views: {
        'menuContent' :{
          templateUrl: "templates/page2.html",
          controller: "MainCtrl"
        }
      }
    })
    .state('eventmenu.meta', {
      url: "/meta",
      views: {
        'menuContent' :{
          templateUrl: "templates/meta.html",
          controller: "MainCtrl"
        }
      }
    });
  
  $urlRouterProvider.otherwise("/event/main");

  $httpProvider.defaults.headers.common = {
   'x-apikey': '569a2b87566759cf4b984a50'
  };

});

ionApp.run( function ($rootScope, $http, DBservice) {
  var ii = 0;  var jj = 0;

  DBservice.getMeta;
  DBservice.getContact();
  $rootScope.ngrContact = DBservice.ngrContact().get({id: '5630807cb153815f00000058'}); // 58429a9f2f81e47700000002
  $rootScope.prod = DBservice.getAll;
});

ionApp.controller('MainCtrl', function($rootScope, $scope, $ionicSideMenuDelegate,
     $ionicModal, $ionicActionSheet, $ionicPopup, $timeout) {
 // controller stuff here
});

// create a new factory
ionApp.factory ('DBservice', function ($rootScope, $http, $resource) {

var _getContact = function () {
  $http.get('https://rdb-simpledb.restdb.io/rest/contact?&sort=_changed&dir=-1')
   .success(function (jsonData) {
     $rootScope.allContacts = jsonData;
  });
};

var _getMeta = function () {
  // $http.get('https://rdb-simpledb.restdb.io/rest/_meta')
  // $http.get('https://rdb-simpledb.restdb.io/rest/product/_meta')
  $http.get('https://rdb-simpledb.restdb.io/rest/contact/_meta')
   .success(function (jsonData) {
     $rootScope.getMeta = jsonData;
   });
};

var _ngrContact = function () {
  return $resource('https://rdb-simpledb.restdb.io/rest/contact/:id:comment',
  { comment: '@comment' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
};

var _ngrProduct = function () {
  return $resource('https://rdb-simpledb.restdb.io/rest/product/:id',
  { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
};

// var rdbContact = $resource('https://rdb-simpledb.restdb.io/rest/contact/:id');
// var todo1 = rdbContact.get({id: '5875445d7b9ba006000005f5'});

/* 
//create a todo
var todo1 = new rdbContact();
todo1.foo = 'bar';
todo1.something = 123;
todo1.$save();
*/
 
  return {
    getMeta: _getMeta(),
    getContact: _getContact,
    getAll: _ngrProduct().query(),  
    ngrContact: _ngrContact  // get({id: '587539877b9ba00600000455'})
  };
});


restapp.controller('MainCtrl', function($scope, $rootScope) {

  // $scope.rs$ = $rootScope;

});
