import {List, Map, fromJS} from 'immutable';
import * as types from '../actions/action-types';

const initialState = Map();

export default function(state = initialState, action) {
  let newState = state;

  switch(action.type) {

    case types.GET_GIFTS_SUCCESS:
      newState= state.set('gifts',List(action.items));
      break;
    case types.READ_GIFT_SUCCESS:
      newState= state.set('gift',action.item);
      break; 
    case types.UPDATE_GIFT_SUCCESS:
      newState= state.set('gift', action.item);
      break;
    case types.CREATE_GIFT_SUCCESS:
      newState= state.set('gift', action.item);
      break;
  }
  return newState;
};
