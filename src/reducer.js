import { combineReducers } from 'redux';
import { CHANGE_MESSAGE } from './actions';

export const initialState = {
  message: ''
};

function message(state = '', action) {
  switch(action.type) {
    case CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  message
});
