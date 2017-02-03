import { List } from 'immutable';
import { SET_TASKS, DELETE_TASK } from '../actions/kanBanPostActions';

const initialState = List();

const kanBanPostReducer =  (state = initialState, action) => {
  let newState = state;

  switch(action.type) {
    case SET_TASKS:
      return List(action.data);
    case DELETE_TASK:
      return newState.delete(action.data);

    default:
      return newState;
  }
};

export default kanBanPostReducer;