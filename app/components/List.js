import React from 'react';
import styles from './List.scss';

class List extends React.Component {
  render() {

    return (
    <div className={styles.list}>
      <h3>task: {this.props.title}</h3>
      <h3>priority: {this.props.priority}</h3>
      <h3>createdBy: {this.props.createdBy}</h3>
      <h3>assigned to:{this.props.assignedTo}</h3>
    </div>
    )
  }
}


export default List;