function(){
  var temp = 0;

  var gem = { name: 'Azurite', price: 2.95 };
  var app = angular.module('gemStore', []);
  
  app.controller("StoreController", function() {
    this.product = gem;
  });  
  
})();

function SimpleController($scope) {
  $scope.customers = [ { name: 'Dave Jones', city: 'Phoenix' },  { name: 'Jaime Riley', city: 'Atlanta' },  { name: 'Tomas Walter', city: 'New York' },  { name: 'Heedy Wahlin', city: 'Seattle' },  { name: 'Joe Torres', city: 'Los Angeles' }, ];
}