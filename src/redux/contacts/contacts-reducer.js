import { combineReducers } from 'redux';
import contactsType from './contacts-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case contactsType.ADD:
      return [...state, payload];

    case contactsType.DELETE:
      return state.filter(i => i.id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case contactsType.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
