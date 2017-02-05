import React from 'react';
import Header from '../static/Header';
import styles from './App';


class App extends React.Component {

  render() {
    //the data from the store via mapStateToProps

    return (
    <div>
      <Header />
      { this.props.children }
    </div>
    )
  }
};

export default App;
