import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import App from "./components/App";
import ColumnsPage from "./components/ColumnsPage";
import NewTask from "./components/NewTask";


const reducer = combineReducers(reducers);
const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ ColumnsPage } />
        <Route path="/new-task" component={ NewTask } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
  )