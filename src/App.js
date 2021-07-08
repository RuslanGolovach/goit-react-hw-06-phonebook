import React, { Component } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import shortid from 'shortid';
import styles from './App.module.css';

class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // OnAddContact = ({ name, number }) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   this.state.contacts.some(item => item.name === contact.name)
  //     ? alert(`${name} is already in contacts`)
  //     : this.setState(({ contacts }) => ({
  //         contacts: [contact, ...contacts],
  //       }));
  // };

  // OnDeleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(i => i.id !== id),
  //   }));
  // };

  // changeFilterInput = e => {
  //   this.setState({ filter: e.target.value });
  // };
  // onFilteredContacts = () => {
  //   const { filter, contacts } = this.state;
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  render() {
    // const { filter } = this.state;
    return (
      <Container>
        <h1 className={styles.Title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.TitleContacts}>Contacts</h2>
        <Filter /*value={filter} changeFilterInput={this.changeFilterInput}*/ />
        <ContactList
        // contacts={this.onFilteredContacts()}
        // onDeleteClick={this.OnDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
