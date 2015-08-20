'use strict';

var neverNoteBasePath = 'http://nevernote-1150.herokuapp.com/api/v1/',
    apiKey = '$2a$10$qFLEdC3Apnu6cZLx7jZfDOGHlEgtw/u59IQRKfYWcoIrNlBfLlQfS';

//define angular module
angular.module('notely.notes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notes', {
    templateUrl: 'notes/notes.html'
  });

}])

.controller('NotesController', ['$scope', '$http', function($scope, $http) {

  $http.get(neverNoteBasePath + 'notes?api_key=' + apiKey)
    .success(function(notesData) {
      $scope.notes = notesData;
      });

    $scope.commit = function() {
      $http.post(neverNoteBasePath + 'notes', {
        api_key: apiKey,
        note: {
          title: 'The magic of AngularJS',
          body_html: 'Whoever wrote this API must be a person.'
        }

      })
        .success(function(newNoteData) {
          console.log('Saved!');
          console.log(newNoteData);
      });
    };
}]);
