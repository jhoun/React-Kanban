import React from 'react';
import { connect } from 'react-redux';
import styles from './ColumnItem.scss';
import { deleteTask } from '../actions/kanBanPostActions';
import { Link } from 'react-router';

class ColumnItem extends React.Component {
  constructor(){
    super();
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(){
    const { dispatch } = this.props;
    dispatch(deleteTask(this.props.position))
    this.deleteDataFromServer();

  }


  deleteDataFromServer(){
    const oReq = new XMLHttpRequest();
    oReq.open("DELETE", `/api/card/${this.props.id}`);
    oReq.send();
  }

  render() {
    return (
    <div className={styles.columnItem}>
      <h2>{this.props.title}</h2>
      <h3>priority: {this.props.priority}</h3>
      <h3>assignedTo: {this.props.assignedTo}</h3>
      <div className={styles.createdBy}>{this.props.createdBy}</div>
      <Link to="edit"><button>Edit</button></Link>
      <button onClick={this.deleteTask}>Delete</button>
    </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {

  }
}


export default connect(
  mapStateToProps
)(ColumnItem);