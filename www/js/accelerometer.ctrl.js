angular.module('starter.accelerometer.ctrl', [])
        // cordova plugin add org.apache.cordova.device-motion
        .controller('AccelerometerCtrl', function ($scope, $cordovaDeviceMotion) {
            document.addEventListener("deviceready", function () {
                var watchID;
                $cordovaDeviceMotion.getCurrentAcceleration().then(function (motion) {
                    $scope.motion = motion;
                }, function (err) {
                    $scope.msg = err.message;
                });

                $scope.getAcceleration = function () {
                    $cordovaDeviceMotion.getCurrentAcceleration().then(function (motion) {
                        $scope.motion = motion;
                    }, function (err) {
                        $scope.msg = err.message;
                    });
                };

            }, false);
        });

