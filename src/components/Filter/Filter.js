import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import styles from './Filter.module.css';

const Filter = ({ value, changeFilterInput }) => (
  <label className={styles.LabelFind}>
    <span className={styles.SpanFind}>Find contacts by name</span>
    <input
      className={styles.InputFind}
      type="text"
      name="filter"
      value={value}
      onChange={changeFilterInput}
    />
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilterInput: e =>
    dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// const mapDispatchToProps = (dispatch) => ({
//   onFilter: (e) => dispatch(actions.Filter(e.target.value)),
// })
