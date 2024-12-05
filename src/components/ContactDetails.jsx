// src/components/ContactDetails.js
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../db';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const contactDoc = doc(db, 'contacts', id);
      const contactSnapshot = await getDoc(contactDoc);
      if (contactSnapshot.exists()) {
        setContact(contactSnapshot.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchContact();
  }, [id]);

  if (!contact) return <div>Loading...</div>;

  return (
    <div>
      <h1>Contact Details</h1>
      <p>First Name: {contact.firstName}</p>
      <p>Last Name: {contact.lastName}</p>
      <p>Email: {contact.email}</p>
      <button>
        <Link to={`/edit-contact/${id}`}>Edit Contact</Link>
      </button>
    </div>
  );
}

export default ContactDetails;
