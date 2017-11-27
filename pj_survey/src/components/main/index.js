import angular from 'angular'
import template from './index.html'

export default angular.module('sorcery.components.main', [])

.component('mainComponent', {
	template,
	require: {
		NgModel: 'ngModel'
	},
	controller: function(apiService, $state, $scope, $element, cssService, preSaveValidationService, saveService){
		this.$onInit = ()=>{
			this.NgModel.$render = ()=>{
				this.config = this.NgModel.$modelValue
				this.content = this.config.content
				var pages = this.content.pages
				this.currentPage = pages[0]
				var styleHrefs = this.config.styleLinks

				styleHrefs && styleHrefs.forEach(this.addStyleElement)
				cssService.addRelativeToElement($element, $scope.$id, this.content.styles)
				this.progress = this.config.progress
			}
		},
		this.addStyleElement = (link)=>{
			var linkElement = document.createElement('link')
			linkElement.setAttribute('rel', 'stylesheet')
			linkElement.setAttribute('href', link)
			document.querySelector('head').appendChild(linkElement)
		}
		this.onChange = () => {
			this.isValid = preSaveValidationService.isValid(this.currentPage)
			this.NgModel.$setViewValue(this.NgModel.$modelValue);
		}
		this.save = () => {
			saveService
				.save(this.currentPage.questons)
				.then(()=>$state.go('end'))
		}
	}
})