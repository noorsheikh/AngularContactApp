// Declare the module for the main ng-app directive
var app = angular.module("contactApp", []);

// Declare myController controller
app.controller("myController", ['$scope', '$http', function($scope, $http) {
	$http.get("data/contacts.json").success(function(data) {
		$scope.contacts = data;
	});
}]);