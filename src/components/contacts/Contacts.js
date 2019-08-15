import React, { Component } from 'react'
import Contact from '../contacts/Contact';
import { Consumer } from "../Context"

class Contacts extends Component {
  deleteContact = (id) => { };
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )

  }
}
export default Contacts; 