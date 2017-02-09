import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/kanBanPostActions';
import { Link } from 'react-router';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      priority: '',
      status: 'queue',
      createdBy: '',
      assignedTo: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name

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
      dispatch(addTask(newCard))
    });
    oReq.addEventListener("error", ()=>{
      alert('error')
    });
    oReq.open("POST", `/api/card`);
    oReq.setRequestHeader('Content-Type', 'application/json');
    oReq.send(JSON.stringify(newCard));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.myHandleSubmit(event);
    this.props.router.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
          <select name="status" value={this.state.status} onChange={this.handleInputChange}>
            <option value="queue">Queue</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
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
       <br />
      <Link to="/"><input type="submit" value="Back"/></Link>
      </form>
    );
  }
}

//coming in from the store
const mapStateToProps = (state, ownProps) => {
  console.log('state: ', state.kanBanPostReducer.toJS());
  return {
    data: state.kanBanPostReducer.toJS()
  }
}

//connect to the store
export default connect(
  mapStateToProps
)(NewTask);