import React from 'react';
import styles from './ColumnsPage.scss';
import Column from './Column';

class ColumnsPage extends React.Component {
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

    var inInQueue = this.props.serverData.filter(isInQueue);
    var inProgress = this.props.serverData.filter(isInProgress);
    var done = this.props.serverData.filter(isDone);

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


export default ColumnsPage;