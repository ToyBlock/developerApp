/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Navbar } from 'toy-block';
import { Provider } from 'react-redux';
import Main from './containers/App';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from './middlewares/logger';
import thunk from 'redux-thunk';
import Login from './containers/Login';

const createStoreWithMW = applyMiddleware(logger, thunk)(createStore);

const store = createStoreWithMW(reducers);



export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={store}>
          <Login />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
