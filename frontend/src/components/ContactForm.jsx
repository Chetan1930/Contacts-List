import { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'api/contacts';

const ContactForm = ({ contactToEdit, refreshContacts, clearEdit }) => {
  const [contact, setContact] = useState({ username: '', email: '', phone: '' });

  useEffect(() => {
    if (contactToEdit) setContact(contactToEdit);
  }, [contactToEdit]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (contact._id) {
        await axios.put(`${API}/${contact._id}`, contact);
      } else {
        await axios.post(API, contact);
      }
      refreshContacts();
      setContact({ username: '', email: '', phone: '' });
      clearEdit();
    } catch (err) {
      console.error('Error saving contact:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="username" placeholder="Name" value={contact.username} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={contact.email} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" value={contact.phone} onChange={handleChange} required />
      <button type="submit">{contact._id ? 'Update' : 'Add'} Contact</button>
    </form>
  );
};

export default ContactForm;
