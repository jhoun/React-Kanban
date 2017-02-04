import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import styles from './ColumnsPage.scss';
import Column from './Column';
import { setTasks } from '../actions/kanBanPostActions'

class ColumnsPage extends React.Component {
  constructor () {
    super();

    //React only updates if there is a change in state


    this.onServerData = this.onServerData.bind(this);
    this.onServerError = this.onServerError.bind(this);
  }

  onServerData(data) {
    const { dispatch } = this.props;
    const parsedServerData = JSON.parse(data.currentTarget.response);
    dispatch(setTasks(parsedServerData))
  }

  onServerError(error) {
    console.log('error: ', error);
  }

  loadDataFromServer(){
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", this.onServerData);
    oReq.addEventListener("error", this.onServerError);
    oReq.open("GET", "/api/card");
    oReq.send();
  }

  componentWillMount(){
    this.loadDataFromServer();
  }
  render() {
    function isInQueue(value){
      return value.status === "queue";
    }

    function isInProgress(value){
      return value.status === "inProgress";
    }

    function isDone(value){
      return value.status === "done";
    }

    console.log('this.props: ', this.props.data);
    var inInQueue = this.props.data.filter(isInQueue);
    var inProgress = this.props.data.filter(isInProgress);
    var done = this.props.data.filter(isDone);

    return (
    <div className={styles.columnPage}>

      <div>
        <h3>In Queue</h3>
          <Column serverData={inInQueue}/>
      </div>

      <div>
        <h3>In Progress</h3>
        <Column serverData={inProgress}/>
      </div>

      <div>
        <h3>Done</h3>
        <Column serverData={done}/>
      </div>

    </div>
    )
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
)(ColumnsPage);