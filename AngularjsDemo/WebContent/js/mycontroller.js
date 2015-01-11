
var spaApp =  angular.module('spaDemo', []);

spaApp.controller('PersonCtrl', function($scope, $http, $log){
	$scope.nickname ='Henio';
	$scope.imie ='Kazimierz';
	
	
	$http.get('./persons/persons.json').success(function(data){
		$scope.persons = data;
		
		
	});

	
	
	
});