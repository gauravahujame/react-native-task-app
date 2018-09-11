// import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';

import ListStore from './lists';
import AppStore from './app';

// const hydrate = create({ storage: AsyncStorage });

const stores = {
  appStore: new AppStore(),
  listStore: new ListStore(),
}

// you can hydrate stores here with mobx-persist
// hydrate('list', stores.list);

export default stores;