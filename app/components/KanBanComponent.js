import React from 'react';
import styles from './KanBanComponent.scss';
import List from './List';

class KanBanComponent extends React.Component {
  render() {
    return (
    <div className={styles.kanBanComponent}>
      <h3>KanBanComponent</h3>
      <List />
      <List />
      <List />
    </div>
    )
  }
}


export default KanBanComponent;