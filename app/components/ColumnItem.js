import React from 'react';
import styles from './ColumnItem.scss';


class ColumnItem extends React.Component {
  render() {
    return (
    <div className={styles.columnItem}>
      <h3>task: {this.props.title}</h3>
      <h3>priority: {this.props.priority}</h3>
      <h3>createdBy: {this.props.createdBy}</h3>
      <h3>assignedTo:{this.props.assignedTo}</h3>
    </div>
    )
  }
}


export default ColumnItem;