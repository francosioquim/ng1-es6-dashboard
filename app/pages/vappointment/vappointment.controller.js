import './vappointment.controller.scss';
import _module from '../../angular-module';

export class VAppointmentController {
    constructor() {
    	this.heading = "vAppointment";
    }
}

_module.controller('VAppointmentController', VAppointmentController);
