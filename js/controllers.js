// Declare the module for the main ng-app directive
var contactController = angular.module("contactController", []);

// Declare ContactsController controller
contactController.controller("ContactsController", ['$scope', '$http', function($scope, $http) {
	$http.get("data/contacts.json").success(function(data) {
		$scope.contacts = data;
	});
}]);