'use strict';

angular.module('pictureLocatedOnGoogleMapApp.directive.topPicture', [])
  .directive('topPicture', function () {
    return {
    	restrict: 'E',
    	scope:	{
    		picture: '='
    	},
    	templateUrl: 'templates/directives/topPicture.html'
  	};
});
