import './vservice.controller.scss';
import _module from '../../angular-module';

export class vServiceController {
    constructor() {
    	this.heading = "vService";
    }
}

_module.controller('vServiceController', vServiceController);
