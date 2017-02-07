import React from 'react';
import { connect } from 'react-redux';
import styles from './ColumnItem.scss';
import EditTask from './EditTask'
import { deleteTask } from '../actions/kanBanPostActions';

class ColumnItem extends React.Component {
  constructor(){
    super();
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.state ={
      showReply: false
    }
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

  editTask(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }

  render() {
    return (
    <div className={styles.columnItem}>
      <div className={styles.title}>{this.props.title}</div>
      <div className={styles.body}>priority: {this.props.priority}</div>
      <div className={styles.body}>assignedTo: {this.props.assignedTo}</div>
      <div className={styles.createdBy}>{this.props.createdBy}</div>
      <div className={styles.links}>
        <a onClick={this.editTask.bind(this)}>Edit</a>
        <a onClick={this.deleteTask}>Delete</a>
      </div>
      {this.state.showReply && < EditTask { ...this.props } hideFormOnSubmit={this.editTask.bind(this)}/ >}
    </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.kanBanPostReducer.toJS()
  }
}


export default connect(
  mapStateToProps
)(ColumnItem);