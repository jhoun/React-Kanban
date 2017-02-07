import { List } from 'immutable';
import { SET_TASKS, DELETE_TASK, ADD_TASK, RESET_TASKS } from '../actions/kanBanPostActions';

const initialState = List();

const kanBanPostReducer =  (state = initialState, action) => {
  let newState;

  // function indexedCards(item){
  //   return List(item)
  // }

  switch(action.type) {
    case SET_TASKS:
      newState = action.data.map((item, i) => {
        item['position'] = i
        return item
      })
      return List(newState);

    case DELETE_TASK:
      newState = newState.delete(action.data).map((item, i) =>{
        item['position'] = i
        return item
      })
      return List(newState);

    case ADD_TASK:
      newState = newState.push(action.data).map((item, i) =>{
        return item
      })
      return List(newState);

    case RESET_TASKS:
    console.log('action: ', action);
    console.log('action.data: ', action.data);
    console.log('newState: ', newState);
    console.log('state: ', state);

    newState = state.update(action.data.position, (card) => {
      console.log('card: ', card);
      // console.log('action.data: ', action.data);
      return action.data;
    })
    console.log('newState.toJS(): ', newState.toJS());
    return List(newState);

    default:
      return state;
  }
};

export default kanBanPostReducer;