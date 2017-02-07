import React from 'react';
import { connect } from 'react-redux';
import styles from './ColumnItem.scss';
import { deleteTask } from '../actions/kanBanPostActions';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      priority: '',
      status: 'inProgress',
      createdBy: '',
      assignedTo: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  myHandleSubmit(event){
    const { dispatch } = this.props;
    const newCard = {
      title: this.state.task,
      priority: this.state.priority,
      status: this.state.status,
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo
    }

    const oReq = new XMLHttpRequest();

    oReq.addEventListener("load", ()=>{
      // dispatch(addTask(newCard))
    });
    oReq.addEventListener("error", ()=>{
      alert('error')
    });
    oReq.open("PUT", `/api/card/${this.props.id}`);
    oReq.setRequestHeader('Content-Type', 'application/json');
    oReq.send(JSON.stringify(newCard));
  }

  handleSubmit(event) {
    this.myHandleSubmit(event);
  }

  render(){
    console.log('this.props: ', this.props);
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
      <h1>Edit Page</h1>
        <label>
          Task:
          <br />
          <input
            name="task"
            type="text"
            value={this.state.task}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Priority:
          <br />
          <input
            name="priority"
            type="text"
            value={this.state.priority}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Status:
          <br />
          <input
            name="status"
            type="text"
            value={this.state.status}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        Created By:
        <br />
          <input
            name="createdBy"
            type="text"
            value={this.state.createdBy}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Assigned To:
          <br />
          <input
            name="assignedTo"
            type="text"
            value={this.state.assignedTo}
            onChange={this.handleInputChange} />
        </label>
        <br />
       <input type="submit" value="Submit"/>
      </form>
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
    console.log('this.props: ', this);
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
      {this.state.showReply && < EditForm { ...this.props }/ >}
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