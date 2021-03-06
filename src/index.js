import React from 'react';
import ReactDOM from 'react-dom';
import App from './anatomy';
import * as serviceWorker from './serviceWorker';
import './style/style.scss';

import { Provider } from 'react-redux';
import { store, history } from './config/store';

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
