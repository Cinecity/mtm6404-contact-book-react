// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactDetails from './components/ContactDetails';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
        <Route path="/new-contact" element={<NewContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
      </Routes>
    </Router>
  );
}

export default App;
