// Anything inside of the square brackets are a service that will be included into our application and ngRoute is a service built into Angular
var app = angular.module('myApp', ['ngRoute'])
	
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		// WHen a user reaches my root page they will be navigated to the home.html
			.when('/', {
				templateUrl: "views/home.html"
			}).otherwise({
				redirectTo: "/home"
			})
			.when('/home',{
				templateUrl: "views/home.html",
				controller: "HomeController"
			})
			.when('/shopping-list',{
				templateUrl: "views/shopping-list.html",
				controller: "ShoppingListController",
				controllerAs: "shoplist"
			}).otherwise({
				redirectTo: "/home"
			})
}]);
