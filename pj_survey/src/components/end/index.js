import angular from 'angular'
import template from './index.html'

export default angular.module('sorcery.components.end', [])

.component('end', {
	template,
	require: {
		NgModel: 'ngModel'
	},
	controller: function(apiService, $state, $scope, $element, cssService, preSaveValidationService, saveService){
		this.$onInit = ()=>{
			this.NgModel.$render = ()=>{
				this.config = this.NgModel.$modelValue
				console.log(this.config)
				this.page = this.config.content.endPage
				var styleHrefs = this.config.styleLinks


				styleHrefs && styleHrefs.forEach(this.addStyleElement)
				cssService.addRelativeToElement($element, $scope.$id, this.page.styles)
			}
		},
		this.addStyleElement = (link)=>{
			var linkElement = document.createElement('link')
			linkElement.setAttribute('rel', 'stylesheet')
			linkElement.setAttribute('href', link)
			document.querySelector('head').appendChild(linkElement)
		}
	}
})