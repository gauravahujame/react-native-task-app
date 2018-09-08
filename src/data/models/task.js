import { observable } from 'mobx';

export default class TaskModel {
	store;
	id;
	@observable title;
	@observable time;
	@observable completed;
	@observable category;

	constructor(store, id, title, time, completed, category) {
		this.store = store;
		this.id = id;
        this.title = title;
        this.time = time;
        this.completed = completed;
        this.category = category;
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

    setCategory(category) {
        this.category = category;
    }

	toJS() {
		return {
			id: this.id,
            title: this.title,
            time: this.time,
            completed: this.completed,
            category: this.category,
		};
	}

	static fromJS(store, object) {
		return new TodoModel(store, object.id, object.title, object.time, object.completed, object.category);
	}
}