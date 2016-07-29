import {List, Map, fromJS} from 'immutable';
import * as types from '../actions/action-types';

const initialState = Map();

export default function(state = initialState, action) {
  let newState = state;

  switch(action.type) {

    case types.GET_CATEGORIES_SUCCESS:
      newState= state.set('categories',List(action.categories));
      break;
  }
  return newState;
};
