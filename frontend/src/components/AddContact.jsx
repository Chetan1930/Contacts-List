// components/AddContact.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AddContact = () => {
  const [formData, setFormData] = useState({ username: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/contacts', formData)
    .then(res=>console.log("contact added"))
    .catch((err)=>console.error("contact add nhi paya because duplicate h syd"))
    navigate('/');
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="username" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
