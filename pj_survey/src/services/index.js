import angular from 'angular'
import apiService from './apiService'
import loginService from './loginService'
import preSaveValidationService from './preSaveValidationService'
import saveService from './saveService'
import buildTagNameService from './buildTagNameService'
import cssService from './cssService'

export default angular.module('sorcery.services', [
	apiService.name, loginService.name, buildTagNameService.name,
	cssService.name, preSaveValidationService.name, saveService.name])