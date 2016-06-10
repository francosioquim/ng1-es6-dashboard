import './new.controller.scss';
import _module from '../../angular-module';

export class NewController {
    constructor() {
    	this.heading = "New";
    }
}

_module.controller('NewController', NewController);
