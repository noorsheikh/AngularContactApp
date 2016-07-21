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
	when('/details/:itemId', {
		templateUrl: 'partials/contact-details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/contacts'
	});
}]);