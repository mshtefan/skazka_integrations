import angular from 'angular';
import textFilter from './textFilter';
import buildTagNameFilter from './buildTagNameFilter';

export default angular.module('sorcery.tools', [textFilter.name, buildTagNameFilter.name])