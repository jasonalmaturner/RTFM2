var app = angular.module('rtfm', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUr: 'login/login.html',
		controller: 'loginController'
	}).when('/threads', {

	}).when('threads/:threadId', {

	}).otherwise({
		redirectTo: '/login'
	});
})