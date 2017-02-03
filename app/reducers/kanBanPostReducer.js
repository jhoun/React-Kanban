import { List } from 'immutable';
import { SET_TASKS, DELETE_TASK } from '../actions/kanBanPostActions';

const initialState = List();

const kanBanPostReducer =  (state = initialState, action) => {
  let newState = state;

  function indexedCards(item){
    return List(item)
  }

  switch(action.type) {
    case SET_TASKS:
      let index = action.data.map((item, i) => {
        item['index'] = i
        return item
      })
      return indexedCards(index);

    case DELETE_TASK:
      let newIndex = newState.delete(action.data).map((item, i) =>{
        item['index'] = i
        return item
      })
      return indexedCards(newIndex);

    default:
      return newState;
  }
};

export default kanBanPostReducer;