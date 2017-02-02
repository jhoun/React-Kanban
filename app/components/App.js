import React from 'react';
import KanBanComponent from './KanBanComponent';
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
    console.log('parsedServerData: ', parsedServerData);
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
    return (
    <div>
      <Header />
      <KanBanComponent />
    </div>
    )
  }
};

export default App;