spotify.controller('artistctrl',function($scope,$routeParams,spotifyservice){
	console.log($routeParams.id);

	var page = 'artists/' + $routeParams.id + '/albums';
	var querystring={
		offset:0
	}

	angular.element(document).ready(function(){console.log('ready');
		spotifyservice.ajax(page,querystring).then(function(res){
			if(res.status == 200){
				console.log(res);
				$scope.albums = res.data.items;
			}
		})
	})

})