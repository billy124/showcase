angular.module('starter.accelerometer.ctrl', [])

        .controller('AccelerometerCtrl', function ($scope, $cordovaDeviceMotion) {
            document.addEventListener("deviceready", function () {
                var watchID;

                $cordovaDeviceMotion
                        .getCurrentAcceleration()
                        .then(function (motion) {
                            $scope.motion = motion;
                        }, function (err) {
                            $scope.msg = err.message;
                        });


                $scope.watchAcceleration = function () {
                    alert('watch');
                    var options = {frequency: 500};  // Update every 3 seconds

                    $scope.this_watch = $cordovaDeviceMotion.watchAcceleration(options);

                    $scope.this_watch.promise.then(
                            function () {  /* unused */
                            },
                            function (err) {
                                $scope.msg = err.message;
                            },
                            function (motion) {
                                $scope.motion = motion;
                            });
                };

                $scope.clearWatch = function () {
                    // use watchID from watchAccelaration()
                    $cordovaDeviceMotion.clearWatch($scope.this_watch.watchId);
                };
            }, false);
        });

