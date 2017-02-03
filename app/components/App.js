import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import ColumnsPage from './ColumnsPage';
import New from './New';
import Header from '../static/Header';
import { setTasks } from '../actions/kanBanPostActions'

class App extends React.Component {
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
    //the data from the store via mapStateToProps
    const {data} = this.props;
    return (
    <div>
      <Header />
      <ColumnsPage serverData={data}/>
    </div>
    )
  }
};

//coming in from the store
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.kanBanPostReducer.toJS()
  }
}

//connect to the store
export default connect(
  mapStateToProps
)(App);