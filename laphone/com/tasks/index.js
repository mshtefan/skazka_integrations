const Ctrl = require('../base/controller');
const ViewTasks = require('./view_tasks');
const ModelTasks = require('./model_tasks');
const foreach = require('lodash.foreach');

require('./styles.less');

class Tasks extends Ctrl {
    constructor() {
        super();

        this._ModelTasks = new ModelTasks();

        this._ViewTasks = new ViewTasks({
            model: this._ModelTasks
        });
        this._ViewTasks.enableBinding();

        this._ViewTasks.on(ViewTasks.EVENT_RUN_TASK, this._runTask.bind(this));

        this._ViewBase = this._ViewTasks;

        SAILPLAY.on('actions.perform.success', ()=>{
            this._ModelTasks.fetch();
            this.emit(Tasks.EVENT_TASK_COMPLETED);
        });

        SAILPLAY.on('actions.social.connect.complete', ()=>{
            this._ModelTasks.fetch();
            this.emit(Tasks.EVENT_TASK_COMPLETED);
        });

    }

    _runTask (data) {
        if (data.type == 'inviteFriend' || data.type == 'emailBinding') {
            this._ModelTasks.executeTask(data);
            return true;
        }
    }

    render () {
        this._ViewTasks.renderTasks();
    }

    start() {
        this._ModelTasks.fetch();
    }
}

Tasks.EVENT_EDIT_PROFILE = 'ctrl.tasks.profile-open';
Tasks.EVENT_TASK_COMPLETED = 'ctrl.tasks.completed';

module.exports = Tasks;
