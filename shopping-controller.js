angular.module('myApp')

.controller('ShoppingListController', ['$scope', 
									   'ShoppingListItems', 
									    function($scope, ShoppingListItems){
	var shoplist = $scope; 

	shoplist.items = ShoppingListItems.getList();
// pushing a object that has a {name, qty,,priority}
	shoplist.addItem = function(newItem){
		shoplist.items.push({
			name: shoplist.newItem.name,
			store: shoplist.newItem.store,
			qty: shoplist.newItem.qty,
			price: shoplist.newItem.price,
			// priority: shoplist.newItem.priority
			})
	};

	shoplist.removeItem = function(item){
		// returns the first index at which a given element can be found in the array, or -1 if it is not present
		var removeItem = shoplist.items.indexOf(item);
		// The splice() method changes the contents of an array by removing existing elements and/or adding new elements
		shoplist.items.splice(removeItem, 1)
	};

	shoplist.removeAll = function(){
		shoplist.items = [];
		shoplistitems.removeAll();
		// shoplist.items.length= 0;
		// shoplist.items.splice(0, shoplist.items.length); ***This will also work!***
		

	};
}]);

// grabbing items from list and putting it in shopping list items

// <script>
// var app = angular.module('myApp', []);
// app.controller('orderCtrl', function($scope) {
//     $scope.cars = ["Dodge", "Fiat", "Audi", "Volvo", "BMW", "Ford"];
// });