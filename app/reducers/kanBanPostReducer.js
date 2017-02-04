import { List } from 'immutable';
import { SET_TASKS, DELETE_TASK } from '../actions/kanBanPostActions';

const initialState = List();

const kanBanPostReducer =  (state = initialState, action) => {
  let newState = state;

  // function indexedCards(item){
  //   return List(item)
  // }

  switch(action.type) {
    case SET_TASKS:
      let index = action.data.map((item, i) => {
        item['position'] = i
        return item
      })
      return List(index);

    case DELETE_TASK:
      let newIndex = newState.delete(action.data).map((item, i) =>{
        item['position'] = i
        return item
      })
      return List(newIndex);

    default:
      return newState;
  }
};

export default kanBanPostReducer;