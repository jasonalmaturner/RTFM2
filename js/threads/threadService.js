var app = angular.module('rtfm');

app.service('threadService', function(EnvironmentService, $firebase){
var firebaseUrl = EnvironmentService.getEnv().firebase;

this.getThreads = function (){
	return $firebase(new Firebase(firebaseUrl + '/threads'));
};

this.getThread = function(threadId) {
	return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
}

this.getComments = function(threadId) {
	return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId + '/comments'));
}

})