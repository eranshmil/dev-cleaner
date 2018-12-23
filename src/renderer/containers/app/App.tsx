import React, { Component } from 'react';

import { hot } from 'react-hot-loader';

import { SearchBar, SearchResults } from '../../components';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={`${styles.wrapper} 'mdc-typography'`}>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}

export default hot(module)(App);
