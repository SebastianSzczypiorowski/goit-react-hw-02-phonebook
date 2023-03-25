import { nanoid } from "nanoid";
import React, { Component} from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Section from './Section'






class PhoneBookApp extends Component {
    state = {
      contacts: [],
      filter: '',
    };
   
      

   addContact = e => {
    e.preventDefault();
     // @ts-ignore
     const nameInput = document.querySelector('#name').value;
     // @ts-ignore
     const numberInput = document.querySelector('#number').value;
     const { contacts } = this.state;

     const newContact = {
      id: `id-${nanoid()}`,
      name: nameInput,
      number: numberInput,
    };
    if(contacts.some(contact => contact == nameInput)) {
     alert(`${nameInput} is already present in the phonebook`);
     return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
   }
   render () {
    return(<>
      <Section title='Phonebook'>
      <ContactForm 
      addContact={this.addContact}/>
      </Section>
      <Section title='Contacts'>
      <ContactList
      contacts={this.state.contacts}/>
      </Section>
      </>
    )
   }
  }

  export default PhoneBookApp;