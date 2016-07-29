import { combineReducers } from 'redux';

// Reducers
import giftsReducer from './gifts-reducer';
import categoriesReducer from './categories-reducer';

// Combine Reducers
var reducers = combineReducers({
  giftsState: giftsReducer,
  categoriesState: categoriesReducer
});

export default reducers;
