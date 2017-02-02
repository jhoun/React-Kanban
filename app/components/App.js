import React from 'react';
import KanBanComponent from './KanBanComponent';
import Header from '../static/Header';

class App extends React.Component {
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