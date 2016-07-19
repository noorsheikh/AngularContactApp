var contactApp = angular.module('contactApp', [
	'ngRoute',
	'contactController'
]);

contactApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/contacts', {
		templateUrl: 'partials/contacts.html',
		controller: 'ContactsController'
	}).
	otherwise({
		redirectTo: '/contacts'
	});
}]);