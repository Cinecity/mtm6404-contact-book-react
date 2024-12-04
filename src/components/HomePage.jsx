// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db';
import { Link } from 'react-router-dom';

function HomePage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const contactsCollection = collection(db, 'contacts');
      const contactSnapshot = await getDocs(contactsCollection);
      const contactList = contactSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(contactList);
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <Link to="/new-contact">Add New Contact</Link>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>
              {contact.firstName} {contact.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
