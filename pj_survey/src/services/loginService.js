import angular from 'angular';

const module = angular.module('sorcery.services.login', [])

module.service('loginService', function(apiService, $q){
	this.login = function(){
		const config = window.sConfig
		const auth = window.sAuth
		return apiService.init(config)
			.then(()=> apiService.magic_config(config.config))
			.then(()=> apiService.login(auth))
	}
	this.getConfig = function(){
		return apiService.config
	}
})

export default module