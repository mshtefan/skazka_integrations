import angular from 'angular'
import template from './index.html'

export default angular.module('sorcery.components.page', [])

.component('page', {
	template,
	require: {
		NgModel: 'ngModel'
	},
	controller: function(apiService, $timeout, $scope, $element, cssService){
		this.$onInit = ()=>{
			this.NgModel.$render = ()=>{
				cssService.addRelativeToElement($element, $scope.$id, this.NgModel.$modelValue.styles)
				this.model = this.NgModel.$modelValue
				console.log(this.model)
			}
		}
		this.onChange = (index, question) => {
			var ngModelCopy = angular.copy(this.model)
			ngModelCopy.questons[index] = question
			this.NgModel.$setViewValue(ngModelCopy);
		}
	}
})