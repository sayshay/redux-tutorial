import React from 'react';
import App from './components/App';
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import { store } from './store';

const initialState = {
    result: 1,
    lastValues: []
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('root')
)
