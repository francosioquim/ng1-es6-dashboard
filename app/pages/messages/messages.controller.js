import './messages.controller.scss';
import _module from '../../angular-module';

export class MessagesController {
    constructor() {
        this.heading = "Messages";
    }
}

_module.controller('MessagesController', MessagesController);
