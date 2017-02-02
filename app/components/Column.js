import React from 'react';
import styles from './Column.scss';
import ColumnItem from './ColumnItem';

class Column extends React.Component {
  render() {
    console.log('this.props: ', this.props);
    let listItemNode = this.props.serverData.map((item) => {
      return (
        <ColumnItem
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
    <div className={styles.list}>
      { listItemNode }
    </div>
    )
  }
}


export default Column;