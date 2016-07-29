import axios from 'axios';
import store from '../store';
import { createGiftSuccess, getGiftsSuccess, deleteGiftSuccess, getGiftDetailsSuccess, updateGiftSuccess } from '../actions/gifts-actions';
import { getCategoriesSuccess } from '../actions/categories-actions';


/**
 * Gifts
 */

export function getGifts() {
  return axios.get('http://localhost:3011/gifts')
    .then(response => {
      store.dispatch(getGiftsSuccess(response.data));
      return response;
    });
}

export function getGift(id) {
  let params = id?'id='+id : '';
  return axios.get('http://localhost:3011/gifts?'+params)
    .then(response => {
      store.dispatch(getGiftDetailsSuccess(response.data[0]));
      return response;
    });
}

export function updateGift(gift) {
  return axios.put('http://localhost:3011/gifts/'+gift.id,gift)
    .then(response => {
      store.dispatch(updateGiftSuccess(gift));
      return response;
    });
}

export function createGift(gift) {
  return axios.post('http://localhost:3011/gifts/', gift)
    .then(response => {
      store.dispatch(createGiftSuccess(gift));
      return response;
    });
}

export function deleteGift(gift) {
  return axios.delete('http://localhost:3011/gifts/'+gift.id,gift)
    .then(response => {
      store.dispatch(deleteGiftSuccess(gift));
      return response;
    });
}

/**
 * Categories
 */

export function getCategories() {
  return axios.get('http://localhost:3011/categories')
    .then(response => {
      store.dispatch(getCategoriesSuccess(response.data));
      return response;
    });
}

