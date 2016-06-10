import _module from '../../angular-module';
import './sidebar.component.scss';


let $injectable = ['$scope','$window','$route'];

class SidebarController {
  constructor($scope, $window, $route) {
  	$scope.windowHeight = $window.innerHeight + "px";
  	$scope.$route = $route;
  	angular.element($window).bind('resize', function () {
  		$scope.windowHeight = $window.innerHeight + "px";
	});

  }
}

SidebarController.$inject = $injectable;


export var sidebarComponent = {
	controller: SidebarController,
	controllerAs: '$ctrl',
    template: require('./sidebar.component.html')
};

_module.component('sidebarComponent', sidebarComponent);
