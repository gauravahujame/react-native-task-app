import { observable, action, computed, toJS } from 'mobx';
import uuid from 'uuid';

import ListModel from '../models/list';
import TaskModel from '../models/task';
import { lists } from '../index';


export default class ListStore {
    @observable lists = [];

    totalCount(listId) {
        const list = this.lists.filter(list => list.id === listId);
        return list.tasks.length;
    }

    pendingCount(listId) {
        const list = this.lists.filter(list => list.id === listId);
        return list.tasks.filter(task => task.completed !== true).length;
    }

    @action addList(list) {
        const newList = new ListModel(this, uuid.v4(), list.title, list.color, list.tasks);
        this.lists.push(newList);
    }

    toJS() {
        return this.lists.map(list => list.toJS());
    }

    static fromJS(array) {
        const listStore = new ListStore();
        listStore.lists = array.map(item => ListModel.fromJS(listStore, item));
        return listStore;
    }
}