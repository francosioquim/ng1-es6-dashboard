import './configuration.controller.scss';
import _module from '../../angular-module';

export class ConfigurationController {
    constructor() {
    	this.heading = "Configuration";
    }
}

_module.controller('ConfigurationController', ConfigurationController);
