import { List } from 'immutable';
import { SET_TASKS, DELETE_TASK, ADD_TASK, RESET_TASKS } from '../actions/kanBanPostActions';

const initialState = List();

const kanBanPostReducer =  (state = initialState, action) => {
  let newState;

  switch(action.type) {

    case SET_TASKS:
      newState = action.data.map((item, i) => {
        item['position'] = i
        return item
      })
      return List(newState);

    case DELETE_TASK:
      newState = state.delete(action.data).map((item, i) =>{
        item['position'] = i
        return item
      })
      return List(newState);

    case ADD_TASK:
      newState = state.push(action.data).map((item, i) =>{
        return item
      })
      return List(newState);

    case RESET_TASKS:
      newState = state.update(action.data.position, (card) => {
      return action.data;
    })
    return List(newState);

    default:
      return state;
  }
};

export default kanBanPostReducer;