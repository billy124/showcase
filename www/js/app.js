// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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
                                templateUrl: "templates/accelerometer.html"
                            }
                        }
                    })

                    .state('app.camera', {
                        url: "/camera",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/camera.html"
                            }
                        }
                    })
                    .state('app.capture', {
                        url: "/capture",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/capture.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })
                    
                    .state('app.compass', {
                        url: "/compass",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/compass.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })
                    
                    .state('app.connection', {
                        url: "/connection",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/connection.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })

                    .state('app.contacts', {
                        url: "/contacts",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/contacts.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })

                    .state('app.device', {
                        url: "/device",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/device.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })

                    .state('app.events', {
                        url: "/events",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/events.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })

                    .state('app.file', {
                        url: "/file",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/file.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })

                    .state('app.geolocation', {
                        url: "/geolocation",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/geolocation.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })

                    .state('app.media', {
                        url: "/media",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/media.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })

                    .state('app.notification', {
                        url: "/notification",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/notification.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })

                    .state('app.storage', {
                        url: "/storage",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/storage.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/accelerometer');
        });
