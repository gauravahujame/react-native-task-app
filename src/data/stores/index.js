// import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';

// import App     from './App';
import TaskStore from './tasks';

// const hydrate = create({ storage: AsyncStorage });

const stores = {
//   App,
  taskStore: new TaskStore(),
}

// you can hydrate stores here with mobx-persist
// hydrate('list', stores.list);

export default stores;