import './vreminder.controller.scss';
import _module from '../../angular-module';

export class VReminderController {
    constructor() {
    	this.heading = "vReminder";
    }
}

_module.controller('VReminderController', VReminderController);
