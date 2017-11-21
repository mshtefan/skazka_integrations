import angular from 'angular'
import containerTemplate from './starsContainer.html'
import rowTemplate from './starsRow.html'

export default angular.module('questions.stars', [])

.component('stars', {
	template: containerTemplate,
	require: {
		NgModel: 'ngModel'
	},
	controller: function(apiService, buildTagNameService, $timeout){
		this.$onInit = ()=>{
			console.log(this.NgModel)
			this.NgModel.$render = ()=>{
				this.label = this.NgModel.$modelValue.label
				this.starsNr = this.NgModel.$modelValue.size
				this.model = this.NgModel.$modelValue
			}
		}
		this.onChange = (index, row) => {
			var ngModelCopy = angular.copy(this.model)
			angular.extend(ngModelCopy, this.model)
			ngModelCopy.values[index] = row
			this.NgModel.$setViewValue(ngModelCopy);
		}
	}
})

.component('starsRow', {
	template: rowTemplate,
	require: {
		NgModel: 'ngModel'
	},
	controller: function(apiService, buildTagNameService, $timeout, $scope){
		this.$onInit = ()=>{
			this.NgModel.$render = ()=>{
				this.label = this.NgModel.$modelValue.label
				var starsNr = this.NgModel.$modelValue.starsNr || 0
				this.stars = this.createActiveStars(starsNr)
			}
		}
		this.createActiveStars = (starsNr) => {
			return Array.apply(null, Array(5))
								.map((v, i)=>({
									active: starsNr>i
								}))
		}
		this.setStar = (index) => {
			var tagToSet = buildTagNameService({
				pattern: this.NgModel.$modelValue.tagPattern,
				index: index+1
			})
			var completed = true
			var starsNr = this.starsNr = index+1
			var stars = this.stars = this.createActiveStars(starsNr)
			var ngModelCopy = angular.copy(this.NgModel.$modelValue)
			angular.extend(ngModelCopy ,{
				completed,
				tagToSet,
				starsNr,
				stars
			})
			this.NgModel.$setViewValue(ngModelCopy)
		}
	}
})