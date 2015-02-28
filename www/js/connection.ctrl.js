angular.module('starter.connection.ctrl', [])
        // cordova plugin add org.apache.cordova.network-information
        .controller('ConnectionCtrl', function ($scope, $cordovaNetwork) {

            $scope.networkType = null;
            $scope.connectionType = null;

            document.addEventListener("deviceready", function () {
                $scope.networkType = $cordovaNetwork.getNetwork();

                $scope.refresh = function () {
                    $scope.networkType = $cordovaNetwork.getNetwork();
                    if ($cordovaNetwork.isOnline()) {
                        $scope.connectionType = 'Online';
                    }
                    else if ($cordovaNetwork.isOffline()) {
                        $scope.connectionType = 'Offline';
                    }
                    else {
                        $scope.errorMsg = 'Error getting isOffline / isOnline methods';
                    }
                };
                
                if ($cordovaNetwork.isOnline()) {
                    $scope.connectionType = 'Online';
                }
                else if ($cordovaNetwork.isOffline()) {
                    $scope.connectionType = 'Offline';
                }
                else {
                    $scope.errorMsg = 'Error getting isOffline / isOnline methods';
                }
            }, false);


        });
