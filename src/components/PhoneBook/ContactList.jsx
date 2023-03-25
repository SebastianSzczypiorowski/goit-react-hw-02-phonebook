import PropTypes from 'prop-types';

const ContactList = ({contacts}) => {
    return (
      <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
          {contact.name} 
          {contact.number}
          <button type='button' name={contact.name}></button>
          </li>
        )
      })}
      </ul>
    )
  }

  ContactList.propTypes = {
    contacts: PropTypes.array,
  
  };

  export default ContactList