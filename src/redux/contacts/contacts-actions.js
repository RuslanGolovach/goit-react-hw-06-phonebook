import contactsType from './contacts-types';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
  type: contactsType.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: contactsType.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: contactsType.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
