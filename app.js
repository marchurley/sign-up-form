var app = angular.module('myApp', []);

app.directive('optIn', function() {
	return {
		transclude: true,
		templateUrl: 'signup.html',
		restrict: 'AE',
		replace: true
	};
});
