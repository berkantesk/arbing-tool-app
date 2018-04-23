import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Routes from './common/Routes';
import RootReducer from './common/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import PromiseMiddleware from './common/PromiseMiddleware';
import HttpUtil from './common/HttpUtil';
import devTools from 'remote-redux-devtools';

const store = createStore(RootReducer, compose(
  applyMiddleware(PromiseMiddleware),
  devTools()
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  }
});

HttpUtil.initialize(store.dispatch);
// render the main component
const App = () => (
  <View style={styles.container}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </View>
);

export default App;