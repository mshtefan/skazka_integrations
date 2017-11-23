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
		const user = {[auth.auth_key]: auth.auth_value}
		console.log('kek', apiService.user.tags.exist)
		return apiService.init(config)
			.then(()=> apiService.magic_config(config.config))
//			.then((res)=> apiService.user.info({user}))
//			.then((res)=> console.log('reesss', res))
			.then((res)=> apiService.user.tags.exist({tags:[res.config.config.completionTag, res.config.config.userExistTag], user}))
			.then((res)=> {
				console.log(apiService.config)
				if(res.tags.find(x=>x.name == apiService.config.userExistTag).exist == false) {
					return $q.reject('cant login')
				} else if(res.tags.find(x=>x.name == apiService.config.completionTag).exist == true) {
					return $q.reject('already completed')
				} else {
					return this.getConfig()
				}
			})
	}
	this.getConfig = function(){
		if(!apiService.config) {
			const config = window.sConfig
			const auth = this.auth = window.sAuth
			return apiService.init(config)
				.then(()=> apiService.magic_config(config.config))
				.then((config)=>config.config.config)
		} else {
			return $q((res)=>res(apiService.config))
		}

	}
})

export default module