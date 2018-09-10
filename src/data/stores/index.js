// import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';

import TaskStore from './tasks';
import ListStore from './lists';
import AppStore from './app';

// const hydrate = create({ storage: AsyncStorage });

const stores = {
  appStore: new AppStore(),
  taskStore: new TaskStore(),   // Check if we can pass stores through contructors
  listStore: new ListStore(),
}

// you can hydrate stores here with mobx-persist
// hydrate('list', stores.list);

export default stores;