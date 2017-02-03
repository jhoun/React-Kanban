import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import ColumnsPage from './ColumnsPage';
import New from './New';
import Header from '../static/Header';

class App extends React.Component {
  constructor () {
    super();

    //React only updates if there is a change in state
    this.state = {
      data: []
    }

    this.onServerData = this.onServerData.bind(this);
    this.onServerError = this.onServerError.bind(this);
  }

  onServerData(data) {
    const parsedServerData = JSON.parse(data.currentTarget.response);
    this.setState({data: parsedServerData})
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
    const {data} = this.state;
    return (
    <div>
      <Header />
      <ColumnsPage serverData={data}/>
    </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log('state: ', state.kanBanPostReducer.toJS());
  return {
    data: state.kanBanPostReducer.toJS()
  }
}


export default connect(
  mapStateToProps
)(App);