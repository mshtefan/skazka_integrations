import angular from 'angular';
import _ from 'underscore';

const module = angular.module('sorcery.services.save', [])

module.service('saveService', function(apiService, loginService, $q){
	this.save = (questions)=>{
		var varsAndTags = questions.reduce((acc,v)=>{
			if(v.completed){
				switch (v.type) {
					case 'stars':
						var localVarsAndTags = starsSave(v)
						angular.extend(acc.vars, localVarsAndTags.vars)
						acc.tags = acc.tags.concat(localVarsAndTags.tags)
						break;
					case 'textarea':
						var localVarsAndTags = textareaSave(v)
						angular.extend(acc.vars, localVarsAndTags.vars)
						acc.tags = acc.tags.concat(localVarsAndTags.tags)
						break;
				}
			}
			return acc
		}, {
			vars: {},
			tags: []
		})

		var loginCreds = loginService.auth
		var user = {[loginCreds.auth_key]: loginCreds.auth_value}
		var completedTag = apiService.config.completionTag

		var parsedVars = _(varsAndTags.vars).mapObject(angular.toJson)

		return apiService.user.vars.add({custom_vars: parsedVars, user})
			.then(()=>apiService.user.tags.add(varsAndTags.tags.concat([completedTag]), user))
	}

	//every save return tags and vars array
	function starsSave(question){
		var stars = question.values.reduce((acc,x)=>{
			// tagToSet будет только есть звезда поставлена
			if(x.tagToSet){
				acc.vars.push({
					name: x.lastVariableName,
					stars: x.starsNr
				})
				acc.tags.push(x.tagToSet)
			}
			return acc
		}, {vars: [], tags: []})
		return {
			tags: stars.tags,
			vars: {[question.lastVariableName]: stars.vars}
		}
	}
	function textareaSave(question){
		var vars = {
			[question.lastVariableName]: question.value
		}
		var tags = [
			question.tagToSet
		]
		return {
			vars, tags
		}
	}
})

export default module