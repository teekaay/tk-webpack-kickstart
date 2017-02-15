import { combineReducers } from 'redux';
import { INIT_APP } from './actions';

export const initialState = {

};

function initApp(state = initialState, action) {
  switch(action.type) {
    case INIT_APP:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export const rootReducer = combineReducers({

});
