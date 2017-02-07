import React from 'react';
import { connect } from 'react-redux';
import { resetTasks } from '../actions/kanBanPostActions'

class EditTask extends React.Component {
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

  myHandleSubmit(event, req){
    const newCard = {
      title: this.state.task,
      priority: this.state.priority,
      status: this.state.status,
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo
    }

    // const oReq = new XMLHttpRequest();
    req.open("PUT", `/api/card/${this.props.id}`);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(newCard));
  }

  handleSubmit(event) {
    event.preventDefault();
    const oReq = new XMLHttpRequest();
    this.props.hideFormOnSubmit(event);
    this.myHandleSubmit(event, oReq);
    oReq.addEventListener('load', (event) => {
      const { dispatch } = this.props;
      console.log('event.currentTarget: ', event.currentTarget);
      const parsedServerData = JSON.parse(event.currentTarget.response);
      parsedServerData.position = this.props.position;
      dispatch(resetTasks(parsedServerData));
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
      <h1>Edit Task</h1>
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

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.kanBanPostReducer.toJS()
  }
}


export default connect(
  mapStateToProps
)(EditTask);