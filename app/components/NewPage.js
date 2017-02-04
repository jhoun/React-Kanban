import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/kanBanPostActions';

class NewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      priority: '',
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
      task: this.state.task,
      priority: this.state.priority,
      assignedTo: this.state.assignedTo
    }
    dispatch(addTask(newCard))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.myHandleSubmit(event);
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
            checked={this.state.task}
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
          Assigned To:
          <br />
          <input
            name="assignedTo"
            type="text"
            value={this.state.assignedTo}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit"/>
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
)(NewPage);