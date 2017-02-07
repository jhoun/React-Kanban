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


    var inInQueue = this.props.data.filter(isInQueue);
    var inProgress = this.props.data.filter(isInProgress);
    var done = this.props.data.filter(isDone);
    console.log('this.props.data: ', this.props.data);
    return (
    <div className={styles.columnPage}>

      <div>
        <div className={styles.columns}>IN QUEUE</div>
          <Column serverData={inInQueue}/>
      </div>

      <div>
        <div className={styles.columns}>IN PROGRESS</div>
        <Column serverData={inProgress}/>
      </div>

      <div>
        <div className={styles.columns}>DONE</div>
        <Column serverData={done}/>
      </div>

    </div>
    )
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
)(ColumnsPage);