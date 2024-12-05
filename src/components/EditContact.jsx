import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../db';
import { Link, useParams } from 'react-router-dom';

function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchContact = async () => {
      try {
        const contactDoc = doc(db, 'contacts', id);
        const contactSnapshot = await getDoc(contactDoc);
        if (isMounted) {
          if (contactSnapshot.exists()) {
            setContact(contactSnapshot.data());
          } else {
            setContact({ error: 'Contact not found' });
          }
        }
      } catch (error) {
        if (isMounted) {
          setContact({ error: 'An error occurred while fetching the contact' });
        }
      }
    };

    fetchContact();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!contact) return <div>Loading...</div>;
  if (contact.error) return <div>{contact.error}</div>;

  return (
    <div>
      <h1>Contact Details</h1>
      <p>First Name: {contact.firstName}</p>
      <p>Last Name: {contact.lastName}</p>
      <p>Email: {contact.email}</p>
      <div style={{ marginTop: '20px' }}>
        <Link to={`/edit-contact/${id}`} aria-label="Edit Contact">
          <button>Edit Contact</button>
        </Link>
        <Link to="/" aria-label="Go to Home" style={{ marginLeft: '10px' }}>
          <button>Go to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;
