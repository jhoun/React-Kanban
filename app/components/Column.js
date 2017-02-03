import React from 'react';
import styles from './Column.scss';
import ColumnItem from './ColumnItem';

class Column extends React.Component {
  render() {
    let listItemNode = this.props.serverData.map((item, i) => {
      return (
        <ColumnItem
          title={item.title}
          priority={item.priority}
          status={item.status}
          assignedTo={item.assignedTo}
          createdBy={item.createdBy}
          key={item.id}
          index={item.index}
        />
      )
    })
    return (
    <div className={styles.column}>
      { listItemNode }
    </div>
    )
  }
}


export default Column;