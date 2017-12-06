import angular from 'angular';

const module = angular.module('sorcery.services.preSaveValidation', [])

module.service('preSaveValidationService', function(apiService, $q){
	this.isValid = (page) => page.questons.every(x=>!x.required || x.completed)
})

export default module