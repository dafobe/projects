
import * as types from '../actions/action-types';

export function getCategoriesSuccess(categories) {
  return {
    type: types.GET_CATEGORIES_SUCCESS,
    categories
  };
}

