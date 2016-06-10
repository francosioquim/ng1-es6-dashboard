
import './dashboard.controller.scss';
import _module from '../../angular-module';

export class DashboardController {
    constructor() {
    	this.heading = "Dashboard";
    }
}

_module.controller('DashboardController', DashboardController);
