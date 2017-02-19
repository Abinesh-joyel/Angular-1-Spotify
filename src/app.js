var spotify = angular.module('spotifyApp', ['ngMaterial','ngRoute'])
	.run(function($rootScope){
		console.log('angular material started');
	})

.constant('spotifyapi','https://api.spotify.com/v1/')
.constant('redditapi','https://www.reddit.com/r/Android/new/.json')

.config(function($routeProvider,$locationProvider,$mdThemingProvider){

	$mdThemingProvider.theme('default')
    .dark();

    $mdThemingProvider.theme('formTheme')
    .primaryPalette('yellow')
    .accentPalette('green')
    .dark();

	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/',{
		templateUrl:"src/app/templates/home.html",
		controller:'homectrl'
	})
	.when('/artistdetails/:id',{
		templateUrl:'src/app/templates/artist.html',
		controller:'artistctrl'
	})
	.when('/about',{
		templateUrl:'src/app/templates/about.html'
	})
	.when('/reddit',{
		templateUrl:'src/app/templates/reddit.html',
		controller:'redditctrl'
	})
	.otherwise({
	    redirectTo: "/"
	});



});
