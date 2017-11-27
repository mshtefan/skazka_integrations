import angular from 'angular'
import cssjson from 'CSSJSON'
import _ from 'underscore'

export default angular.module('sorcery.services.css', [])

.service('cssService', function(){
	this.objectToCssNode = cssjson.toHEAD
	this.objectToCssNodePrefixed = (prefix, css) => {
		function prefixKeys(obj){
			return _.reduce(obj, (acc, v, k)=> {
				const newKey = (k.startsWith('@') || k.startsWith('children') || k.startsWith('attributes')) ? k : prefix + ' ' + k
				const newValue = (typeof v == 'object' && !k.startsWith('attributes')) ? prefixKeys(v) : v
				acc[newKey] = newValue
				return acc
			}, {})
		}
		const prefixedCssObject = prefixKeys(css)
		return cssjson.toHEAD(prefixedCssObject)
	}
	this.addRelativeToElement = (element, uniqPrefix, styles) => {
		if(!styles) return;
		var relativeCssPrefix = '*[data-uniq="'+uniqPrefix+'"]'
		var cssNode = this
			.objectToCssNodePrefixed(relativeCssPrefix, styles)
		element.attr('data-uniq', uniqPrefix)
		element.prepend(cssNode)
	}
})