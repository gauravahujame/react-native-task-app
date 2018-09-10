import { observable, computed, reaction } from 'mobx';
import uuid from 'uuid';

import TaskModel from '../models';
import { tasks } from '../index';


export default class TaskStore {
    @observable tasks = tasks;

    @computed get activeTaskCount() {
        return this.tasks.reduce(
            (sum, task) => sum + (task.completed ? 0 : 1),
            0
        )
    }

    @computed get completedCount() {
        return this.tasks.length - this.activeTaskCount;
    }

    addTask(title, time) {
        this.tasks.push(new TaskModel(this, uuid.v4(), title, time, false));
    }

    toggleAll(checked) {
        this.tasks.forEach(
            task => task.completed = checked
        );
    }

    clearCompleted() {
        this.tasks = this.tasks.filter(
            task => !task.completed
        );
    }

    toJS() {
        return this.tasks.map(task => task.toJS());
    }

    static fromJS(array) {
        const taskStore = new TaskStore();
        taskStore.tasks = array.map(item => TaskModel.fromJS(taskStore, item));
        return taskStore;
    }
}