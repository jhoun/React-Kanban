import { List } from 'immutable';
import { DELETE_TASK } from '../actions/kanBanPostActions';

const initialState = List();

const kanBanPostReducer =  (state = initialState, action) => {
  let newState = state;

  switch(action.type) {
    case DELETE_TASK:
      return newState.delete(action.data);

    default:
      return newState;
  }
};

export default kanBanPostReducer;