import {combineReducers, createStore,applyMiddleware} from 'redux';
import counterReducer from '../reducer/counterReducer';
import postreducer from '../reducer/postreducer';
import thunk from 'redux-thunk';
import newsReducer from '../reducer/newsReducer';

let rootredcuer = combineReducers({
    post:postreducer,
    count:counterReducer,
    news:newsReducer
})

const store = createStore(rootredcuer,applyMiddleware(thunk));

export default store;