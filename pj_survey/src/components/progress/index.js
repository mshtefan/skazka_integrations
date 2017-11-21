import angular from 'angular'
import template from './index.html'

export default angular.module('sorcery.components.progress', [])

.component('progressBar', {
	template,
	binding: {
		styles: '&'
	},
	require: {
		NgModel: 'ngModel'
	},
	controller: function(apiService, $timeout, $scope, $element, cssService, progressWeight){
		this.$onInit = ()=>{
			this.NgModel.$render = ()=>{
				cssService.addRelativeToElement($element, $scope.$id, this.styles)
				this.progress = progressWeight.calculateWeight(this.NgModel.$modelValue)
				console.info(this.progress)
			}
		}
	}
})

.service('progressWeight', function(){
	this.calculateWeight = (page) => {
		console.info(page)
		return page.questons.reduce((acc, v, k)=>{
			var max = 0
			var current = 0
			if(v.type == 'stars'){
				max = v.values.length
				current = v.values.filter(x=>x.completed).length
			} else if (v.type == 'textarea'){
				max = 1
				current = v.value ? 1 : 0
			}
			return {
				max: acc.max+max,
				current: acc.current+current
			}
		}, {
			max: 0,
			current: 0
		})
	}
})