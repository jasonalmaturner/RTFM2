var app = angular.module('rtfm');

app.controller('threadsCtrl', function($scope, threadsRef){

$scope.threads = threadsRef.$asArray();

})