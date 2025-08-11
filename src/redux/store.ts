import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { headerReducer } from './header-reducer'

let reducers = combineReducers({
    header: headerReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

declare global {
    interface Window {
        store: typeof store;
    }
}

window.store = store;

export default store;