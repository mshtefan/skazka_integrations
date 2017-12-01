import angular from 'angular';
import page from './page';
import questions from './questions';
import main from './main';
import progress from './progress';
import end from './end';
import loginFailure from './loginfailure';
import alreadyCompleted from './alreadycompleted';

export default angular.module('sorcery.components', [page.name, questions.name, 
	main.name, progress.name, end.name,
	loginFailure.name, alreadyCompleted.name])