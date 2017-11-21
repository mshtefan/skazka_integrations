import angular from 'angular'
import apiService from './apiService'
import loginService from './loginService'
import buildTagNameService from './buildTagNameService'
import cssService from './cssService'

export default angular.module('sorcery.services', [
	apiService.name, loginService.name, buildTagNameService.name,
	cssService.name])