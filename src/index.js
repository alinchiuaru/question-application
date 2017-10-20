import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './App';
import LocalStorageService from './services/localStorageService';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
const LocalStorage = new LocalStorageService();

//Small hack to keep localStorage in sync with the store
store.subscribe(function() {
    LocalStorage.setItem('questionData', store.getState().question);
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
