import angular from 'angular'

export default angular.module('sorcery.services.buildTagName', [])

.factory('buildTagNameService', function(){
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
		return value.pattern.replace('[index]', value.index)
	}
})