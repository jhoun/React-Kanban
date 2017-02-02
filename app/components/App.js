import React from 'react';
import ColumnsPage from './ColumnsPage';
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

export default App;