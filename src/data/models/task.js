import { observable } from 'mobx';

export default class TaskModel {
	store;
	id;
	@observable title;
	@observable time;
	@observable completed;

	constructor(store, id, title, time, completed) {
		this.store = store;
		this.id = id;
        this.title = title;
        this.time = time;
        this.completed = completed;
	}

	toggle() {
		this.completed = !this.completed;
	}

	destroy() {
		this.store.todos.remove(this);
	}

	setTitle(title) {
		this.title = title;
    }
    
    setTime(time) {
        this.time = time;
    }

	toJS() {
		return {
			id: this.id,
            title: this.title,
            time: this.time,
            completed: this.completed,
		};
	}

	static fromJS(store, object) {
		return new TaskModel(store, object.id, object.title, object.time, object.completed);
	}
}