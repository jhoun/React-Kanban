import React from 'react';
import styles from './KanBanComponent.scss';
import List from './List';

class KanBanComponent extends React.Component {
  render() {
    let listItemNode = this.props.serverData.map((item) => {
      return (
        <List
          title={item.title}
          priority={item.priority}
          status={item.status}
          assignedTo={item.assignedTo}
          createdBy={item.createdBy}
          key={item.id}
        />
      )
    })
    return (
    <div className={styles.kanBanComponent}>
      <h3>KanBanComponent</h3>
      { listItemNode }
    </div>
    )
  }
}


export default KanBanComponent;