import React from 'react';
import styles from './ColumnPage.scss';
import Column from './Column';

class ColumnPage extends React.Component {
  render() {

    return (
    <div className={styles.columnPage}>
      <Column serverData={this.props.serverData}/>
      <Column serverData={this.props.serverData}/>
      <Column serverData={this.props.serverData}/>
    </div>
    )
  }
}


export default ColumnPage;