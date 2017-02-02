import React from 'react';
import styles from './ColumnsPage.scss';
import Column from './Column';

class ColumnsPage extends React.Component {



  render() {
    function isInQueue(value){
      if (value.status === "queue"){
        return value;
      }
    }

    function isInProgress(value){
      if (value.status === "inProgress"){
        return value;
      }
    }

    function isDone(value){
      if (value.status === "done"){
        return value;
      }
    }

    var inInQueue = this.props.serverData.filter(isInQueue);
    var inProgress = this.props.serverData.filter(isInProgress);
    var done = this.props.serverData.filter(isDone);

    return (
    <div className={styles.columnPage}>

      <Column serverData={inInQueue}/>

      <Column serverData={inProgress}/>

      <Column serverData={done}/>
    </div>
    )
  }
}


export default ColumnsPage;