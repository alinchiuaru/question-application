import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './App';
import LocalStorageService from './services/localStorageService';

import { BrowserRouter, Route } from 'react-router-dom';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
const LocalStorage = new LocalStorageService();

//Small hack to keep localStorage in sync with the store
store.subscribe(function() {
    LocalStorage.setItem('questionData', store.getState().question);
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
