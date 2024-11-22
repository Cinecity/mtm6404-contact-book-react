import { useState, useEffect } from 'react'
import db from './utils/db'
import { collection, getDocs } from 'firebase/firestore'

import './App.css'

const Contact = ({ id, firstName, lastName, email }) => {

  return (
    <div className='contact'>
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>{email}</p>
    </div>
  );

}

function App() {

  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const docsSnapshot = await getDocs(collection(db, "contacts"));
    const data = docsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
  }));
  setContacts(data);
};

console.log(contacts); // Output: {id: "1", name: "John Doe", phone: "1234567890"

useEffect(() => {
  fetchContacts();
}, []);

  return (
    <>
    {contacts.map((contact) => (
      <Contact 
        key={contact.id}
        id={contact.id} 
        firstName={contact.firstName} 
        lastName={contact.lastName} 
        email={contact.email} 
      />
    ))}
    </>
  )
}

export default App
