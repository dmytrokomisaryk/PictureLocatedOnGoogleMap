'use strict';

angular.module('pictureLocatedOnGoogleMapApp')
  .controller('MainCtrl', function ($scope) {

    $scope.pictures = [
    	{
    		'description': 'My Super Photo',
    		'url': 'night_lviv_top_view.jpg',
    		'location': [49.828901, 24.058137]
		},
		{
    		'description': 'My Super Photo',
    		'url': 'lychakiv_cemetery.jpg',
    		'location': [49.83246, 24.0560909]
		},
		{
    		'description': 'My Super Photo',
    		'url': 'night_lviv_top_view.jpg',
    		'location': [49.8322389, 24.05359095]
		},
		{
    		'description': 'My Super Photo',
    		'url': 'lychakiv_cemetery.jpg',
    		'location': [49.83246, 24.0560909]
		},
		{
    		'description': 'My Super Photo',
    		'url': 'night_lviv_top_view.jpg',
    		'location': [49.8322389, 24.05359095]
		},
		{
    		'description': 'My Super Photo',
    		'url': 'lychakiv_cemetery.jpg',
    		'location': [49.83246, 24.0560909]
		},
		{
    		'description': 'My Super Photo',
    		'url': 'night_lviv_top_view.jpg',
    		'location': [49.8322389, 24.05359095]
		},
		{
    		'description': 'My Super Photo',
    		'url': 'lychakiv_cemetery.jpg',
    		'location': [49.83246, 24.0560909]
		},
		{
    		'description': 'My Super Photo',
    		'url': 'night_lviv_top_view.jpg',
    		'location': [49.8322389, 24.05359095]
		},
        {
            'description': 'My Super Photo',
            'url': 'lychakiv_cemetery.jpg',
            'location': [49.83246, 24.0560909]
        },
        {
            'description': 'My Super Photo',
            'url': 'night_lviv_top_view.jpg',
            'location': [49.8322389, 24.05359095]
        },
        {
            'description': 'My Super Photo',
            'url': 'lychakiv_cemetery.jpg',
            'location': [49.83246, 24.0560909]
        },
        {
            'description': 'My Super Photo',
            'url': 'night_lviv_top_view.jpg',
            'location': [49.8322389, 24.05359095]
        },
        {
            'description': 'My Super Photo',
            'url': 'lychakiv_cemetery.jpg',
            'location': [49.83246, 24.0560909]
        },
        {
            'description': 'My Super Photo',
            'url': 'night_lviv_top_view.jpg',
            'location': [49.8322389, 24.05359095]
        }
    ];

    $scope.chageLocation = function (location) {
    	Map.initialize(location).show();
    };

  	$scope.chageLocation($scope.pictures[0].location);

    $scope.initializeGallery = function () {
         Gallery.initialize();
    }

    $scope.initializeGallery();
  });