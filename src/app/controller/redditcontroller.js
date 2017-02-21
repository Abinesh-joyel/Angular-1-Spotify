spotify.controller('redditctrl',function($scope,redditservice,$window,$timeout){

	$scope.processing = false;
	$scope.redditStories = [];
	var scrollY = 0;
	$window.onscroll = scrollposition;
	var fabbtn = angular.element(document.getElementById('fabbtn'));
	var redditContent = angular.element(document.getElementById('redditContent'));


	function fetchStories(status){
		var params = {};
		switch(status){
			case 'after':
				params[status] = $scope.redditStories[$scope.redditStories.length - 1].data.name;
				break;
			case 'before':
				params[status] = $scope.redditStories[0].data.name;
				break;
			default:
				params = {};
		}
		$scope.processing = true;
		redditservice.ajax_get(params).then(function(res){//console.log(res);
			$scope.processing = false;
			$scope.redditStories = status == 'after' ? $scope.redditStories.concat(res.data.data.children)
			                                         : res.data.data.children.concat($scope.redditStories);
		})
	}
	
	function scrollposition(){
		var contentHeight = redditContent[0].offsetHeight + 200;
		var yOffset = $window.pageYOffset; 
		var y = yOffset + $window.innerHeight;
		if(yOffset == 0){
			fabbtn.removeClass('scrolling');
			fetchStories('before');
		}
		else{
			fabbtn.addClass('scrolling');
		}
		
		if(y >= contentHeight){
			if($scope.processing){
				return;
			}
			fetchStories('after');
		}
	}

	$scope.scrolltop = function(){
		//$window.scrollTo(0,0);
		var currentY = $window.pageYOffset;
	    var targetY = redditContent[0].offsetTop;
		var animator = $timeout($scope.scrolltop,24);
		if(currentY > targetY){
			scrollY = currentY-80;
			$window.scrollTo(0, scrollY);
		} else {
			console.log('cleared');
			$timeout.cancel(animator);
		}
	}

	angular.element(document).ready(function(){
		fetchStories('default');
	})



})