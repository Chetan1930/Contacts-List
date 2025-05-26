// components/ContactList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const fetchContacts = async () => {
    const res = await axios.get('/api/contacts');
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;
    try {
      await axios.delete(`/api/contacts/${id}`);
      fetchContacts();
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  return (
    <div>
      <h2>All Contacts</h2>  
      <div className="contact-list">
        {contacts.map((c) => (
          <div key={c._id} className="contact-card">
            <p><strong>{c.username}</strong></p>
            <p>{c.email}</p>
            <p>{c.phone}</p>
            <Link to={`/edit/${c._id}`}><button>Edit</button></Link>
            <button onClick={() => deleteContact(c._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
