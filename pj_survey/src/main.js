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
				return loginService.login().
					then(
						(res)=>{
							console.log('loginn', loginService.getConfig())
							return loginService.getConfig()
						},
						(res)=> { //если не получилось залогиниться
							$state.go('loginFailure')
						})
			}
		}
	})
	$stateProvider.state({
		url: "/loginfail",
		name: "loginFailure",
		template: "login fail"
	})
	$urlRouterProvider.when('', '/');
})
