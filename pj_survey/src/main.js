import SAILPLAY from 'sailplay-hub';
import 'sailplay-hub-actions/sailplay.hub.actions';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Cookies from 'angular-cookie';
import NgTouch from 'angular-touch';
import page from './components/page'
import services from './services';
import components from './components';
import tools from './tools'
import directives from './directives';


export default angular.module('sorcery', [ Cookies, NgTouch, uiRouter, directives.name, services.name, components.name, tools.name])

.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state({
		url: "/",
		name: "main",
		template: '<main-component data-ng-model="$resolve.login"></main-component>',
		resolve: {
			login: (loginService, $state ) => {
				console.log('logging')
				return loginService.login().
					then(
						(res)=>{
							return res
						},
						(res)=> { //если не получилось залогиниться
							switch (res) {
								case 'cant login':
									console.log('kl')
									$state.go('loginFailure')
									break;
								case 'already completed':
									$state.go('alreadyCompleted')
									break;
								default:
									$state.go('loginFailure')
									break;
							}
						})
			}
		}
	})
	$stateProvider.state({
		url: "/alreadycompleted",
		name: "alreadyCompleted",
		template: "<already-completed data-ng-model='$resolve.login'><already-completed>",
		resolve: {
			login: (loginService, $state ) => {
				return loginService.getConfig()
			}
		}
	})
	$stateProvider.state({
		url: "/loginfail",
		name: "loginFailure",
		template: "<login-failure data-ng-model='$resolve.login'></login-failure>",
		resolve: {
			login: (loginService, $state ) => {
				return loginService.getConfig()
			}
		}
	})
	$stateProvider.state({
		url: "/success",
		name: "end",
		template: "<end data-ng-model='$resolve.login'></end>",
		resolve: {
			login: (loginService, $state ) => {
				return loginService.getConfig()
			}
		}
	})
	$urlRouterProvider.when('', '/');
})
