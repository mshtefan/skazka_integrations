import angular from 'angular';
import page from './page';
import questions from './questions';
import main from './main';
import progress from './progress';

export default angular.module('sorcery.components', [page.name, questions.name, main.name, progress.name])