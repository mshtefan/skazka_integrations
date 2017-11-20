import mainStyle from '@lib/styles/style.important.styl';
import { SailPlay } from '@lib/core.js'
import ko from 'knockout';
require('@lib/styles/helpers.important.styl')

import mainTemplate from './main.pug';
require('./assets/styles/style.native.styl')

let initiated = false;

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

// const auth_hash = '13cf8e2ba90811385d0ed29949a32a59fbe67ea8'; // no loyalti optin
// const auth_hash = 'c3c349dbb889c2d3a15dc60089f14fbffe2a49aa' // loyal
// const domain = 'http://sailplay.ru';
// const partner_id = 1737

window.SAILPLAY___ = function (opts) {
    if (initiated) return;
    initiated = true;

    let sp = new SailPlay({
        auth_hash: opts.auth_hash,
        domain: opts.domain,
        partner_id: opts.partner_id || 1737
    })

    sp.performComplete = function () {
        pji_post.updateActions();
    }

    let pji_post = {
        showCustomAction: ko.observable(false),
        inLoyalty: ko.observable(false),
        latestPoints: ko.observable(0),
        customActionSrc: ko.observable(),
        closeCustomAction: ko.observable(),
        activeActions: ko.observableArray(),
        specificConfig: ko.observable(),
        minAvailableGifts: ko.observableArray(),
        agreement: ko.observable(false),
        showModal: ko.observable(false),
        closestGift: ko.observable({
            name: '...loading...',
            thumbs: {
                url_250x250: ''
            }
        }),

        closeOnOverlayCustomAction(data, e) {
            if (~e.target.className.indexOf('h-screen--full')) {
                pji_post.showCustomAction(false)     
                pji_post.customActionSrc('');
                pji_post.updateActions()                
            }
        },

        closeOnOverlay(data, e) {
            if (~e.target.className.indexOf('h-screen--full'))
            pji_post.showModal(false)            
        },

        close_modal(data, e) {
            pji_post.showModal(false)
        },

        close() {
            pji_post.showCustomAction(false);
            pji_post.updateActions();            
        },

        redirect() {
            location.assign(pji_post.specificConfig().rewardUrl);
        },

        pointsNeeded: ko.observable(0),
        user: ko.observable(),
        getLatestPoints() {
            sp.getHistory().then(data => {
                let purchases = data.history.filter(h => h.action == 'purchase');
                pji_post.latestPoints(purchases && purchases[0].points_delta || 0)
            })
        },

        performAction() {
            sp.performAction(this, pji_post)
        },

        getClosestGift() {
            sp.getGifts().then(data => {
                let possible_gifts = [], max_gift, closest_gift, closest_price;
                for (let gift of data.gifts) {
                    if (!max_gift) max_gift = gift;
                    else if (gift.points > max_gift.points)
                        max_gift = gift

                    if (gift.points > pji_post.user().user_points.confirmed)
                        possible_gifts.push(gift);
                }

                if (possible_gifts.length)
                    for (let gift of possible_gifts) {
                        let diff = gift.points - pji_post.user().user_points.confirmed;
                        if (closest_price === undefined) {
                            closest_price = diff;
                            closest_gift = gift;
                        } else if (diff < closest_price) {
                            closest_price = diff;
                            closest_gift = gift;
                        }
                    }

                pji_post.closestGift(possible_gifts.length ? closest_gift : max_gift)
                pji_post.pointsNeeded(closest_price || -1)
            })
        },

        getMinAvailableGifts() {
            sp.getGifts().then(data => {
                let gifts = data.gifts;
                gifts.sort((a, b) => b - a)
                gifts.splice(4)
                for (let gift of gifts) {
                    if (gift.points <= pji_post.user().user_points.confirmed) {
                        gift.enought = true;
                    }
                }

                pji_post.minAvailableGifts(gifts)
            })
        },

        updateActions() {
            Promise.all([sp.getActions(), sp.getCustomActions()]).then(data_arr => {
                let _data = [].concat(data_arr[0].data.actions, data_arr[1].actions);
                shuffle(_data)
                pji_post.activeActions(_data.slice(0, 3))
            })
        },

        getActionCustomIcon(type, data) {
            let icon;
            try {
                icon = pji_post.specificConfig() && pji_post.specificConfig().actions.system[type] && pji_post.specificConfig().actions.system[type].icon || icon || content.image || ''
            } catch(e) {
                return ''
            }
            return icon
        },

        getActionCustomName(type, data) {
            let name;
            try {
                name = pji_post.specificConfig() && pji_post.specificConfig().actions.system[type] && pji_post.specificConfig().actions.system[type].title || name
            } catch (e) {
                return ''
            }
            return name
        },

        getActionIcon(socialType, action) {
            let icon;
            try {
                icon = pji_post.specificConfig().actions.social[socialType][action].icon
            } catch(e) {
                return ''
            }
            return icon
        },

        getActionText(socialType, action) {
            let text
            try {
                text = pji_post.specificConfig().actions.social[socialType][action].title
            } catch (e) {
                return ''
            }
            return text
        },

        gotoPapaRewards(item, ev) {
            if (pji_post.state == 'signed')
                pji_post.redirect()
            else {
                sp.addTags(['Loyalty Opt-in']);
                let texts = ev.currentTarget.querySelectorAll('span');
                texts[0].classList.add('__sailplay-hidden_default');
                setTimeout(() => { 
                    texts[1].classList.remove('__sailplay-hidden_default')                            
                }, 200)

                setTimeout(() => {
                    texts[1].classList.add('__sailplay-hidden_default')       
                }, 1000)

                setTimeout(() => {
                    pji_post.state = 'signed'
                    texts[2].classList.remove('__sailplay-hidden_default')                                                                                 
                }, 1200)
            }
        }

    }

    // on local
    // pji_post.closestGift.subscribe(gift => {
    //     gift.thumbs.url_250x250 = `${domain}${gift.thumbs.url_250x250}`;
    // })

    // pji_post.minAvailableGifts.subscribe(gifts => {
    //     for (let g of gifts) {
    //         g.thumbs.url_250x250 = `${domain}${g.thumbs.url_250x250}`;
    //     }
    // })

    sp.config.subscribe(config => {
        sp.getConfigByName('pjpostorder')
            .then(data => {
                pji_post.specificConfig(data.config.config);
            })

        let qUser = sp.getUserInfo(), qTag;
        qUser.then(pji_post.user);
        qUser.then(() => {
            qTag = sp.existTags(['Loyalty Opt-in'])
            qTag.then(data => {
                if (data.tags[0].exist) {
                    pji_post.inLoyalty(true)
                    pji_post.getLatestPoints()
                    pji_post.getClosestGift()
                    pji_post.updateActions()

                    setTimeout(() => {
                        sailplay_element.style.display = 'block';
                    }, 100)
                } else {
                    pji_post.getLatestPoints()                    
                    pji_post.getMinAvailableGifts()

                    setTimeout(() => {
                        sailplay_element.style.display = 'block';
                    }, 100)
                }
            })
        });
    })

    let sailplay_element = document.querySelector('sailplay-magic');
    sailplay_element.style.display = 'none';
    sailplay_element.innerHTML = mainTemplate()

    ko.applyBindings(pji_post, sailplay_element);
}

// SAILPLAY({
//     auth_hash: '13cf8e2ba90811385d0ed29949a32a59fbe67ea8',
//     domain: 'http://sailplay.net'
// })