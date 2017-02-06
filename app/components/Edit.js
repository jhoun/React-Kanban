import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/kanBanPostActions';
import { Link } from 'react-router';

class Edit extends React.Component {


  render() {

    return (
      <h1>Edit Page</h1>
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