spotify.factory('spotifyservice',function(spotifyapi,$http){

	return {
		ajax:function(page,data){
	
		return $http.get(spotifyapi+page,{params:data})
			.then(function(response){
				return response;
			},function(error){
				return error;
				//console.log(error);
			});
	}
	}
})

.factory('redditservice',function(redditapi,$http){
	return {
		ajax_get:function(data){
			return $http.get(redditapi,{params:data})
				.then(function(response){
					return response;
				},function(error){
					return error;
				});
		}
	}
})

.directive('infiniteScroll',function(){
	return{
		restrict:'A',
		link:function(scope,element,attrs){
			element.bind('scroll',function(){
				 if ((element[0].scrollTop + element[0].offsetHeight) == element[0].scrollHeight) {
                    scope.$apply(attrs.infiniteScroll)
                }
			})
		}
	}
})
