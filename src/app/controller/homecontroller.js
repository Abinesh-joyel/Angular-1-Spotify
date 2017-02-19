spotify.controller('homectrl',function($scope,$location,$rootScope,spotifyservice){
  $rootScope.currentNavItem = 'home';

  var page='search';
  var querystring = {
  	query:'',
  	offset:0,
  	limit:20,
  	type:'artist',
  	market:'US'
  }

  $scope.getartist = function(searchkey){console.log(searchkey);
  	querystring.query = searchkey;
  	spotifyservice.ajax(page,querystring).then(function(res){
  		if(res.status == 200){
  			//console.log(res);
  			$scope.artist = res.data.artists.items;
  		}
  	});
  }

});


