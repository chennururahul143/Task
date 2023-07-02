import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <img src={contact.photo}/>
            <span>{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
