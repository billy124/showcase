angular.module('starter.geolocation.ctrl', [])
    // cordova plugin add org.apache.cordova.geolocation 
  .controller('GeolocationCtrl', function ($scope, $cordovaGeolocation) {

    $scope.getLocation = function () {

      $cordovaGeolocation
        .getCurrentPosition({timeout: 10000, enableHighAccuracy: false})
        .then(function (position) {
          console.log("position found");
          $scope.position = position;
          // long = position.coords.longitude
          // lat = position.coords.latitude
        }, function (err) {
          console.log("unable to find location");
          $scope.errorMsg = "Error : " + err.message;
        });
    };

  });
