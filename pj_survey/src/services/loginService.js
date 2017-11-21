import angular from 'angular';

const module = angular.module('sorcery.services.login', [])

module.service('loginService', function(apiService, $q){
	this.login = function(){
		// auth should be email or phone, without auth_hash
		const config = window.sConfig
		// example auth_key=email, auth_value=example@example.com
		const auth = this.auth = window.sAuth
		if(!(auth.hasOwnProperty('auth_key') && auth.hasOwnProperty('auth_value'))){
			return $q((res, rej)=>rej('no auth'))
		}
		return apiService.init(config)
			.then(()=> apiService.magic_config(config.config))
//			.then(()=> apiService.login(auth))
	}
	this.getConfig = function(){
		return apiService.config
	}
})

export default module