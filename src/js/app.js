import '../sass/style.scss';

import { MapCtrl } from './controllers/map.ctrl';
import { dataService } from './services/data.service';

angular.module("schemeApp",['ngRoute'])
	.service('dataService', dataService)
	.controller('MapCtrl', MapCtrl)
	.config(function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl: '/templates/map',
				controller: 'MapCtrl'
			})
			.when('/auth',{
				templateUrl: '/templates/auth'
			})
	});

angular.bootstrap(document, ["schemeApp"]);