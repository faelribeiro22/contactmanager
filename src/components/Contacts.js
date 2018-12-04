import React, { Component } from 'react';
import Contact from "./Contact";


class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'Jhondoe@gmail.com',
        phone: '5555-5555',
      },
      {
        id: 2,
        name: 'karen Willians',
        email: 'karenwillians@gmail.com',
        phone: '5555-5555',
      },
      {
        id: 3,
        name: 'Jose',
        email: 'Jose@gmail.com',
        phone: '3333-3333',
      },
    ]
  }

  render() {
    const { contacts } = this.state;

    return (
      <>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </>
    )
  }
}

export default Contacts;
