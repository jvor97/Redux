import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CounterReducer from './store/reducers/counter';
import ResultReducer from './store/reducers/result';

const reducer = combineReducers({
    count: CounterReducer,
    rslt: ResultReducer
});

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
