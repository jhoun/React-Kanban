import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/kanBanPostActions';
import { Link } from 'react-router';

class Edit extends React.Component {
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
    console.log('this.props: ', this.props);
    const { dispatch } = this.props;
    console.log('this.state: ', this.state);
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
    this.props.router.push('/');
    this.myHandleSubmit(event);
    event.preventDefault();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
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
       <br />
      <Link to="/"><input type="submit" value="Back"/></Link>
      </form>
    );
  }
}


//coming in from the store
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.kanBanPostReducer.toJS()
  }
}

//connect to the store
export default connect(
  mapStateToProps
)(Edit);