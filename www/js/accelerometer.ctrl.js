angular.module('starter.accelerometer.ctrl', [])

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

