/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/store';
import { AppNavigator, middleware } from './src/Router/LoginRouter';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './src/reducers';

export const store = configureStore({}, applyMiddleware);
// const store = createStore(AppReducer, applyMiddleware(middleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

