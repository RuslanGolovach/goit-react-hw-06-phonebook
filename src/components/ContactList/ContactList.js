import React from 'react';
import PropTypes from 'prop-types';
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

export default ContactList;
