import {combineReducers, createStore} from 'redux';
import counterReducer from '../reducer/counterReducer';
import postreducer from '../reducer/postreducer';

let rootredcuer = combineReducers({
    post:postreducer,
    count:counterReducer
})

const store = createStore(rootredcuer);

export default store;