import { observable, action, computed } from 'mobx';
import uuid from 'uuid';

import ListModel from '../models/list';
import TaskModel from '../models/task';
import { lists } from '../index';


export default class ListStore {
    @observable lists = lists;

    totalCount(listId) {
        const list = this.lists.filter(list => list.id === listId);
        return list.tasks.length;
    }

    pendingCount(listId) {
        const list = this.lists.filter(list => list.id === listId);
        return list.tasks.filter(task => task.completed !== true).length;
    }

    @action addList(list) {
        this.lists.push(new ListModel(this, uuid.v4(), ...list));
    }

    @action addTask(listId, title, time) {
        const list = this.lists.filter(list => list.id === listId);
        list.tasks.push(new TaskModel(this, uuid.v4(), title, time, false));
    }

    toJS() {
        return this.lists.map(task => task.toJS());
    }

    static fromJS(array) {
        const listStore = new ListStore();
        listStore.lists = array.map(item => ListModel.fromJS(listStore, item));
        return listStore;
    }
}