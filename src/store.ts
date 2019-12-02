import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { createRootReducer } from './reducers';

export const history = createBrowserHistory();

const initialState: any = {};
const enchancers: any = [];

const composedEnchancers = compose(
    applyMiddleware(
        routerMiddleware(history),
        thunk
    ),
    ...enchancers
);

export const store = createStore(
    createRootReducer(history),
    initialState,
    composedEnchancers
);