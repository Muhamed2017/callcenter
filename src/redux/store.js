import { createStore, applyMiddleware, compose, } from 'redux'

import rootReducer from './reducers/rootRoducer';
import { thunk } from 'redux-thunk';


export default function configureStore(initialState) {
    const composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composerEnhancers(applyMiddleware(thunk)))
}