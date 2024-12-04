// src/components/EditContact.js
import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../db';
import { useParams, useNavigate } from 'react-router-dom';

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    const fetchContact = async () => {
      const contactDoc = doc(db, 'contacts', id);
      const contactSnapshot = await getDoc(contactDoc);
      if (contactSnapshot.exists()) {
        setContact(contactSnapshot.data());
      }
    };

    fetchContact();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contactDoc = doc(db, 'contacts', id);
      await updateDoc(contactDoc, contact);
      navigate(`/contact/${id}`);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={contact.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={contact.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
}

export default EditContact;
