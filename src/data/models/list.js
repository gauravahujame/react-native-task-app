import { observable, computed } from 'mobx';
import TaskModel from './task';

export default class ListModel {
	store;
	id;
	@observable tasks;
	@observable title;
	@observable color;

	constructor(store, id, title, color, tasks) {
		this.store = store;
		this.id = id;
        this.title = title;
		this.color = color;
		this.tasks = tasks;
	}

	setTitle(title) {
		this.title = title;
    }
    
    setColor(color) {
        this.color = color;
	}
	
	addTask(task) {
		this.tasks = this.tasks.push(new TaskModel(this, uuid.v4(), ...task));
	}

	toJS() {
		return {
			id: this.id,
            title: this.title,
			color: this.color,
			tasks: this.tasks,
		};
	}

	static fromJS(store, object) {
		return new ListModel(store, object.id, object.title, object.color, object.tasks);
	}
}