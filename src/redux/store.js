// redux/store.js
import { createStore, combineReducers } from 'redux';
import favoritesReducer from './reducers/favorites';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // Add other reducers as needed
});

const store = createStore(rootReducer); 
 
export default store; 
 