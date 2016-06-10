require('../navigation/header/header.component.js');
require('../navigation/sidebar/sidebar.component.js');

import _module from '../angular-module';
import './wrapper.component.scss';


let $injectable = ['$scope','$window'];

class WrapperController {
  constructor($scope, $window) {
  	$scope.windowHeight = $window.innerHeight + "px";
  	$scope.vboxStyle = ".grid  .ui-grid-render-container-body .ui-grid-viewport { height: " + ($window.innerHeight - 180) + "px !important; }";
  	angular.element($window).bind('resize', function () {
  		$scope.windowHeight = $window.innerHeight + "px";
  		$scope.vboxStyle = ".grid .ui-grid-viewport { height: " + ($window.innerHeight - 180) + "px !important; }";
	});
  }
}

WrapperController.$inject = $injectable;


export var wrapperComponent = {
  	controller: WrapperController,
    template: require('./wrapper.component.html')
};

_module.component('wrapperComponent', wrapperComponent);
