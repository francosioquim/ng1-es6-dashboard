import _module from '../angular-module';


let $injectable = ['$http', '$q'];

export class MessageService {
    constructor($http, $q) {
    	this._$http = $http;
    }
    getMessages() {
    	return this._$http({
		  method: 'GET',
		  url: 'http://vensawebtest.azurewebsites.net/message'
		}).then(
		(response) => {
			return response.data;
		  });
    }

    getPatientData(id) {
        return this._$http({
          method: 'GET',
          url: 'http://vensawebtest.azurewebsites.net/message/' + id
        }).then(
        (response) => {
            return response.data;
          });
    }
}


MessageService.$inject = $injectable;

_module.service('MessageService', MessageService);
