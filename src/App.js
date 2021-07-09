import React, { Component } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <Container>
        <h1 className={styles.Title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.TitleContacts}>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

export default App;
