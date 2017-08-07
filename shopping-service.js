angular.module('myApp')

.factory('ShoppingListItems', function(){		// factory or service
	var items = [];
	function getList(){
		return items;
	}

	return {								// returns an object
		getList: getList
	};
});

// multiple files are dependent upon this code.
// 