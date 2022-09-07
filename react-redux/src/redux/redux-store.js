import { combineReducers, legacy_createStore as createStore } from 'redux';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
    loginReducer,
    profileReducer,
});

const store = createStore(reducers);

export default store;