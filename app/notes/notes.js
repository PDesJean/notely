'use strict';

var neverNoteBasePath = 'http://nevernote-1150.herokuapp.com/api/v1/',
    apiKey = '$2a$10$qFLEdC3Apnu6cZLx7jZfDOGHlEgtw/u59IQRKfYWcoIrNlBfLlQfS';

//define angular module
var noteApp = angular.module('notely.notes', ['ngRoute'])

noteApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notes', {
    templateUrl: 'notes/notes.html'
  });

}]);

noteApp.controller('NotesController', ['$scope', 'NotesBackend', function($scope, NotesBackend) {
  var self = this;
  $scope.note = {};

   self.assignNotes = function(notes) {
     $scope.notes = notes;
   };

   $scope.commit = function() {
     NotesBackend.postNote($scope.note, self.assignNotes);
   };

   NotesBackend.fetchNotes(self.assignNotes);
 }]);
