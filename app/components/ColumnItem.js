import React from 'react';
import { connect } from 'react-redux';
import styles from './ColumnItem.scss';
import { deleteTask } from '../actions/kanBanPostActions';
import { Link } from 'react-router';

class ReplyForm extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>"Im ReplyForm"</div>
    )
  }
}

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
    console.log('this.props: ', this.props);
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }

  render() {
    return (
    <div className={styles.columnItem}>
      <h2>{this.props.title}</h2>
      <h3>priority: {this.props.priority}</h3>
      <h3>assignedTo: {this.props.assignedTo}</h3>
      <div className={styles.createdBy}>{this.props.createdBy}</div>
      <button onClick={this.editTask.bind(this)}>Edit</button>
      <button onClick={this.deleteTask}>Delete</button>
      {this.state.showReply && < ReplyForm / >}
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