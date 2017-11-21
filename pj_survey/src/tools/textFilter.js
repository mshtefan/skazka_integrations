import angular from 'angular'

export default angular.module('sorcery.tools.filters.text', [])

.filter('text', function(apiService){
	return function(value){
		if(value.startsWith('$texts')){
			var splitValue = value.slice(1).split('.')
			var text = splitValue.reduce((acc, v)=>{
				return acc[v]
			}, apiService.config)
			return text
		} else {
			return value
		}
	}
})