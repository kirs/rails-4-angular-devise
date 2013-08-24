angular.module('angularSorcery.controllers').controller('SessionsController', ['$scope', '$location', '$cookieStore', 'Session', 'Settings', function($scope, $location, $cookieStore, Session, Settings) {

  $scope.session = Session.userSession;

  $scope.create = function() {

    if ( Session.signedOut ) {
      $scope.session.$save()
      .success(function(data, status, headers, config) {
        $location.path('/home');
      });
    }

  };

}]);