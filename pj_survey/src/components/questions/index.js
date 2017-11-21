import angular from 'angular';
//import checkbox from './checkbox';
import stars from './stars'
import textarea from './textarea'

export default angular.module('sorcery.components.questions', [stars.name, textarea.name])

.component('question', {
	template: `
		<div data-ng-switch="$ctrl.model.type">
			<stars ng-switch-when="stars" data-ng-model="$ctrl.model" data-ng-change="$ctrl.onChange()"></stars>
			<textarea-container ng-switch-when="textarea" data-ng-model="$ctrl.model" 
				data-ng-change="$ctrl.onChange()"></textarea-container>
		</div>
	`,
	require: {
		NgModel: 'ngModel'
	},
	controller: function(apiService, $timeout, $element, $scope, cssService){
		this.$onInit = ()=>{
			this.NgModel.$render = ()=>{
				this.model = this.NgModel.$modelValue
				cssService.addRelativeToElement($element, $scope.$id, this.NgModel.$modelValue.styles)
			}
		}
		this.onChange = () => {
			console.warn(this.model)
			this.NgModel.$setViewValue(this.model);
		}
	}
})