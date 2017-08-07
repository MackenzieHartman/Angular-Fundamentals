angular.module('myApp')						// connects to index.html
// Dependency Injection
.controller('HomeController', ['$scope', 
								'ShoppingListItems', 
								function($scope, ShoppingListItems){
								var home = $scope;
								$scope.items = ShoppingListItems.getList();
}]);
