import './vlab.controller.scss';
import _module from '../../angular-module';

export class VLabController {
    constructor() {
    	this.heading = "vLab";
    }
}

_module.controller('VLabController', VLabController);
