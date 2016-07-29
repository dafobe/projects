
import * as types from '../actions/action-types';

export function getGiftsSuccess(items) {
  return {
    type: types.GET_GIFTS_SUCCESS,
    items
  };
}

export function getGiftDetailsSuccess(item) {
  return {
    type: types.READ_GIFT_SUCCESS,
    item
  };
}

export function updateGiftSuccess(item) {
  return {
    type: types.UPDATE_GIFT_SUCCESS,
    item
  };
}

export function createGiftSuccess(item) {
  return {
    type: types.CREATE_GIFT_SUCCESS,
    item
  };
}

export function deleteGiftSuccess(deletedId) {
  return {
    type: types.DELETE_GIFT_SUCCESS,
    deletedId
  };
}
