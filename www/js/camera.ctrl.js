angular.module('starter.camera.ctrl', [])
        // cordova plugin add org.apache.cordova.camera
        .controller('CameraCtrl', function ($scope, $cordovaCamera) {
            document.addEventListener("deviceready", function () {
                $scope.takePicture = function () {
                    var options = {
                        quality: 50,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: Camera.PictureSourceType.CAMERA
                    };

                    // udpate camera image directive
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.cameraimage = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        console.log('Failed because: ' + message);
                    });
                };
            }, false);
        });
