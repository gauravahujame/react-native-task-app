import { observable, action, computed } from 'mobx';
import uuid from 'uuid';

// import ListModel from '../models/list';
// import { lists } from '../index';


export default class AppStore {
    @observable user = {
        firstName: 'Gaurav',
        lastName: 'Ahuja',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    };
}