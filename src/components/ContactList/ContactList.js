import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/contacts/contacts-actions';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <div className={styles.Thumb}>
      <ul className={styles.List}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onDeleteClick={onDeleteClick}
              id={id}
            />
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

const onFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => ({
  contacts: onFilteredContacts(state.contacts.items, state.contacts.filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteClick: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
