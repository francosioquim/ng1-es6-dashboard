import './favourites.controller.scss';
import _module from '../../angular-module';

export class FavouritesController {
    constructor() {
    	this.heading = "Favourites";
    }
}

_module.controller('FavouritesController', FavouritesController);
