require('../components/angular/angular.min');
require('../components/angular-animate/angular-animate.min');
require('../components/angular-cookies/angular-cookies.min');
require('../components/angular-route/angular-route.min');
require('../components/angular-sanitize/angular-sanitize.min');
require('../components/angular-touch/angular-touch.min');
require('../components/angular-ui-grid/ui-grid.min');

import _module, { setModuleDependencies } from './angular-module';

let angularModule = angular.module('Vensa Test', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCookies',
    'ui.grid',
    'ui.grid.selection',
    'ui.grid.pagination'
]);

/******************************************************************************
 * NOTE: this "must" come after the main module is defined
 *****************************************************************************/

setModuleDependencies(angularModule);

/******************************************************************************
 * main app: components, directives, controllers, main style, etc
 *****************************************************************************/

import './app.scss';

require('./pages/favourites/favourites.controller.js');
require('./pages/dashboard/dashboard.controller.js');
require('./pages/messages/messages.controller.js');
require('./pages/vreminder/vreminder.controller.js');
require('./pages/vlab/vlab.controller.js');
require('./pages/vappointment/vappointment.controller.js');
require('./pages/vservice/vservice.controller.js');
require('./pages/new/new.controller.js');
require('./pages/configuration/configuration.controller.js');

require('./navigation/header/header.component.js');
require('./navigation/sidebar/sidebar.component.js');
require('./layout/wrapper.component.js');
require('./services/message.service.js');

/******************************************************************************
 * Angular bootstrap/setup section
 *****************************************************************************/


// setup routes
_module.config([
    '$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider ) {
        $routeProvider
            .when('/', {
                template: require('./pages/favourites/favourites.controller.html'),
                controller: 'FavouritesController',
                controllerAs: '$ctrl',
                activetab: 'favourites'
            })
            .when('/favourites', {
                template: require('./pages/favourites/favourites.controller.html'),
                controller: 'FavouritesController',
                controllerAs: '$ctrl',
                activetab: 'favourites'
            })
            .when('/dashboard', {
                template: require('./pages/dashboard/dashboard.controller.html'),
                controller: 'DashboardController',
                controllerAs: '$ctrl',
                activetab: 'dashboard'
            })
            .when('/messages', {
                template: require('./pages/messages/messages.controller.html'),
                controller: 'MessagesController',
                controllerAs: '$ctrl',
                activetab: 'messages',
                resolve: {
                    messages : ['MessageService',function(MessageService){
                        return MessageService.getMessages();
                    }]
                }                
            })
            .when('/vreminder', {
                template: require('./pages/vreminder/vreminder.controller.html'),
                controller: 'VReminderController',
                controllerAs: '$ctrl',
                activetab: 'vreminder'
            })
            .when('/vlab', {
                template: require('./pages/vlab/vlab.controller.html'),
                controller: 'VLabController',
                controllerAs: '$ctrl',
                activetab: 'vlab'
            })
            .when('/vservice', {
                template: require('./pages/vservice/vservice.controller.html'),
                controller: 'vServiceController',
                controllerAs: '$ctrl',
                activetab: 'vservice'
            })
            .when('/vappointment', {
                template: require('./pages/vappointment/vappointment.controller.html'),
                controller: 'VAppointmentController',
                controllerAs: '$ctrl',
                activetab: 'vappointment'
            })
            .when('/new', {
                template: require('./pages/new/new.controller.html'),
                controller: 'NewController',
                controllerAs: '$ctrl',
                activetab: 'new'
            })
            .when('/configuration', {
                template: require('./pages/configuration/configuration.controller.html'),
                controller: 'ConfigurationController',
                controllerAs: '$ctrl',
                activetab: 'configuration'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
]);

angular.bootstrap(document, [_module.name], { strictDi: true });
