import { ContactForm } from 'components/ContactForm/ContactForm';
import React, { Component } from 'react';




export class App extends Component {
   
 state = {
  contacts: [],
  name: ''
}


  render() {
    
    return (
      <div>
        <ContactForm />
      </div>
    );
}
}