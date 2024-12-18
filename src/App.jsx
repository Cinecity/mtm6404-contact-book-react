// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactDetails from './components/ContactDetails';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact/:id" element={<ContactDetails />} />
      <Route path="/new-contact" element={<NewContact />} />
      <Route path="/edit-contact/:id" element={<EditContact />} />
    </Routes>
  
  );
}

export default App;