import angular from 'angular'

export default angular.module('sorcery.tools.filters.buildTagName', [])

.filter('buildTagName', function(){
	return function(value){
		/*
			на вход получам объект, в котором например
		 	{
		 		pattern: 'tagname-[index]',
				index '3',
		 	}
		 	на выход получаем
		 	'tagname-3'
		 */
		return value.pattern.replace('[name]', value.name).replace('[index]', value.index)
	}
})