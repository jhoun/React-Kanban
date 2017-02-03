import React from 'react';
import styles from './ColumnItem.scss';

class ColumnItem extends React.Component {
  render() {
    return (
    <div className={styles.columnItem}>
      <h2>{this.props.title}</h2>
      <h3>priority: {this.props.priority}</h3>
      <h3>assignedTo: {this.props.assignedTo}</h3>
      <div className={styles.createdBy}>{this.props.createdBy}</div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
    )
  }
}


export default ColumnItem;