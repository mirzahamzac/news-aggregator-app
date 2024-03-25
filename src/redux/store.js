import { createStore } from 'redux';
import preferencesReducer from './prefrencesReducer';

const store = createStore(preferencesReducer);

export default store;
