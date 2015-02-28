// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', 
               [
                'ionic', 
                'ngCordova',
                'starter.controllers',
                'starter.accelerometer.ctrl',
                'starter.camera.ctrl',
                'starter.contacts.ctrl',
                'starter.geolocation.ctrl',
               ]
            )

        .run(function ($ionicPlatform) {
            
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                    .state('app', {
                        url: "/app",
                        abstract: true,
                        templateUrl: "templates/menu.html",
                        controller: 'AppCtrl'
                    })
                    
                    .state('app.accelerometer', {
                        url: "/accelerometer",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/accelerometer.html",
                                controller: "AccelerometerCtrl"
                            }
                        }
                    })

                    .state('app.camera', {
                        url: "/camera",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/camera.html",
                                controller: "CameraCtrl"
                            }
                        }
                    })
                    
                    .state('app.capture', {
                        url: "/capture",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/capture.html",
                                
                            }
                        }
                    })
                    
                    .state('app.compass', {
                        url: "/compass",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/compass.html",
                                
                            }
                        }
                    })
                    
                    .state('app.connection', {
                        url: "/connection",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/connection.html",
                                
                            }
                        }
                    })

                    .state('app.contacts', {
                        url: "/contacts",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/contacts.html",
                                controller: "ContactsCtrl"
                            }
                        }
                    })

                    .state('app.device', {
                        url: "/device",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/device.html",
                                
                            }
                        }
                    })

                    .state('app.events', {
                        url: "/events",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/events.html",
                                
                            }
                        }
                    })

                    .state('app.file', {
                        url: "/file",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/file.html",
                               
                            }
                        }
                    })

                    .state('app.geolocation', {
                        url: "/geolocation",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/geolocation.html",
                                controller: "GeolocationCtrl"
                            }
                        }
                    })

                    .state('app.media', {
                        url: "/media",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/media.html",
                                
                            }
                        }
                    })

                    .state('app.notification', {
                        url: "/notification",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/notification.html",
                               
                            }
                        }
                    })

                    .state('app.storage', {
                        url: "/storage",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/storage.html",
                               
                            }
                        }
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/accelerometer');
        });
