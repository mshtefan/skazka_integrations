'use strict';

const App = require('./com').App;

require('./less/main.less');

document.addEventListener('DOMContentLoaded', function () {
    App.getInstance().components([
        {
            name: 'Popup',
            mountPoint: 'body'
        },
        {
            name: 'Person',
            mountPoint: '.js-person',
            startAfter: {
                type: 'event',
                name: 'App.EVENT_API_INITED'
            }
        },
        {
            name: 'Tasks',
            mountPoint: '.js-tasks',
            startAfter: {
                type: 'event',
                name: 'Person.EVENT_API_LOGGED'
            },
            communication: {
                'EVENT_TASK_COMPLETED': 'Person.fetch'
            }
        },
        {
            name: 'Gifts',
            mountPoint: '.js-gifts',
            startAfter: {
                type: 'event',
                name: 'Person.EVENT_FETCH'
            },
            communication: {
                'EVENT_BUY': 'Person.fetch'
            }
        },
        {
            name: 'Badges',
            mountPoint: '.js-badges',
            startAfter: {
                type: 'event',
                name: 'Person.EVENT_FETCH'
            },
            viewDependence: 'Person'
        }
    ]);
});
