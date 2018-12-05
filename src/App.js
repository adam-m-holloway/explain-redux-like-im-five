import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';
import Apple from './components/Apple';

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <h1>Explain Redux Like I'm Five</h1>
                    <Apple />
                </div>
            </Provider>
        );
    }
}

export default App;
