import React, { Component } from 'react';



export const App = () => {
  return (
   <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <PhoneBook />
    </div>
  
  );
};

class PhoneBook extends Component {

  state = {
    contacts: [],
    name: ''
  }
  
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };


  handleSubmit = evt => {
    evt.preventDefault();

    const {name} = this.state;
    console.log(`name: ${name}`)
    this.props.onSubmit = ({...this.state})
    this.reset()
  }


  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
        onChange={this.handleChange}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
        </form>
      </div>
    )
  }
  
}



 
