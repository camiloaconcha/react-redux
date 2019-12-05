import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const composeEnhacers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Support for redux devtools
    return createStore(
        rootReducer,
        initialState,
        composeEnhacers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );
}
