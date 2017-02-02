import React from 'react';
import Page from './Page';
import styles from './App.scss';

class App extends React.Component {
  render() {
    console.log('styles: ', styles);
    return (
    <div className={styles.app}>
      <h1>Kanban Main Page</h1>
      <Page />
    </div>
    )
  }
};

export default App;