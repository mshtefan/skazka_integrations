import angular from 'angular';

import core from './core/core';

import ui from './ui/ui';

import sailplay from './sailplay/sailplay';

import '../../config/locale.ru';

import $ from 'jquery';

//templates
import AppTemplate from '../html/app.html';
import PaginationTemplate from '../html/ui/ui.pagination.controls.html';

//styles
import '../less/main.less';

let jeweler = angular.module('sailplay.widgets', [core, ui, sailplay]);


jeweler.config(function (SailPlayProvider, SailPlayActionsDataProvider, SailPlayBadgesProvider) {

  //possible values:
  //url,cookie,remote
  SailPlayProvider.set_auth_type('config');

  SailPlayProvider.set_cookie_name('auth_hash');

  window._CONFIG && SailPlayProvider.set_config({
    partner_id: _CONFIG.SAILPLAY.partner_id,
    domain: _CONFIG.SAILPLAY.domain,
    lang: 'ru'
  });

  _LOCALE && SailPlayActionsDataProvider.set_actions_data(_LOCALE.actions);

  SailPlayBadgesProvider.set_limits([0, 100000]);

});

jeweler.run(function ($rootScope, SailPlay, $templateCache) {

  $templateCache.put('/html/ui/ui.pagination.controls.html', PaginationTemplate);

  $rootScope.locale = _LOCALE || {};

  $rootScope.$on('sailplay-init-success', function () {

    SailPlay.authorize();

  });

});

jeweler.directive('sailplayWidgets', function (SailPlay, ipCookie, $document, $rootScope, SailPlayApi) {

    return {
      restrict: 'E',
      replace: true,
      scope: true,
      template: AppTemplate,
      link: function (scope) {

        scope.global = $rootScope;

        scope.show_history = false;

        scope.show_statuses_list = false;

        scope.show_profile_info = false;

        scope.show_profile_action = true;

        scope.fill_profile = function () {

          scope.show_profile_info = true;

        };

        scope.body_lock = function (state) {

          if (state) {
            $('body').addClass('body_lock');
          }
          else {
            $('body').removeClass('body_lock');
          }

        };

        scope.close_profile = function () {

          scope.show_profile_action = false;

          scope.show_profile_info = false;

          scope.hide_hist = ipCookie('profile_form') && ipCookie('profile_form').custom_vars.hide_hist === 'Да';

          scope.body_lock(false);

        };

        scope.open_profile = function () {

          var popup = $('.js-profile-popup');

          if($('.menu._fixed._open').length) {
            popup.css('top', $('.menu._fixed._open').length && $('.menu._fixed._open').height() || 0)
          } else {
            popup.css('top', $('header').length && $('header').height() || 0)
          }

          scope.show_profile_info = true;

          scope.body_lock(true);

        };

        scope.open_custom_action = function (action) {
          var popup = $('.js-custom_action-popup');

          if($('.menu._fixed._open').length) {
            popup.css('top', $('.menu._fixed._open').length && $('.menu._fixed._open').height() || 0)
          } else {
            popup.css('top', $('header').length && $('header').height() || 0)
          }

          scope.custom_action = action;
        }

        scope.open_history = function(){

          var popup = $('.js-history-popup');

          if($('.menu._fixed._open').length) {
            popup.css('top', $('.menu._fixed._open').length && $('.menu._fixed._open').height() || 0)
          } else {
            popup.css('top', $('header').length && $('header').height() || 0)
          }

          scope.show_history = true;

          scope.body_lock(true);

        };

        scope.close_custom_action = function() {
          scope.custom_action = '';

          scope.body_lock(false);
        }

        scope.close_history = function(){

          scope.show_history = false;

          scope.body_lock(false);

        };

        scope.open_status_list = function(){

          var popup = $('.js-status-popup');

          if($('.menu._fixed._open').length) {
            popup.css('top', $('.menu._fixed._open').length && $('.menu._fixed._open').height() || 0)
          } else {
            popup.css('top', $('header').length && $('header').height() || 0)
          }

          scope.show_statuses_list = true;

          scope.body_lock(true);

        };

        scope.close_status_list = function(){

          scope.show_statuses_list = false;

          scope.body_lock(false);

        };

        SailPlay.on('tags.exist.success', function (res) {

          if (res.status === 'ok' && res.tags[0].exist) {

            scope.show_profile_action = false;
            scope.$apply();

          }

        });

        scope.hide_hist = ipCookie('profile_form') && ipCookie('profile_form').custom_vars.hide_hist === 'Да';

      }
    }

  });

export default jeweler.name;

setTimeout(function(){

  var app_container = document.getElementsByTagName('sailplay-widgets')[0];

  app_container && angular.bootstrap(app_container, ['sailplay.widgets']);

}, 100);
