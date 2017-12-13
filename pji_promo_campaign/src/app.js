import angular from 'angularjs';

angular.module('pji_promo')
    .component('promoList', {
        templateUrl: 'promoList.html',
        controller: ['scope', scope => {
            console.log('scope')
        }]
    })

angular.bootstrap(document.querySelector('sailplay-magic'), ['pji_promo'])