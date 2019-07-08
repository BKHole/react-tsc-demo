import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StateHello from './components/StatefulHello';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {enthusiasm} from './reducers';
import {Provider} from 'react-redux';
import Hello from './containers/Hello';

const store = createStore(enthusiasm);

ReactDOM.render(<Provider store={store}>
    <Hello/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
