import React, { Component } from 'react';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={styles.hello}>
          Hello
        </div>
      </div>
    );
  }
}

export default App;
