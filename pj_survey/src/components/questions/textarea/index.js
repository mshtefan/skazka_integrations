import angular from 'angular'
import template from './index.html'
import autosize from 'autosize'

export default angular.module('questions.textarea', [])

.component('textareaContainer', {
	template,
	require: {
		NgModel: 'ngModel'
	},
	controller: function(apiService, buildTagNameService, $timeout, textFilter){
		this.$onInit = ()=>{
			this.NgModel.$render = ()=>{
				this.model = this.NgModel.$modelValue
				this.label = this.NgModel.$modelValue.label
				this.placeholder = textFilter(this.NgModel.$modelValue.placeholder)
				this.maxLength = this.NgModel.$modelValue.maxLength

				autosize(document.querySelector('textarea-container textarea'))
			}
		}
		this.onChange = () => {
			var model = angular.copy(this.model)
			model.completed = !!model.value
			this.NgModel.$setViewValue(model);
		}
	}
})
