import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', phone: '' });

  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchContact = async () => {
    try {
      const res = await axios.get(`/api/contacts/${id}`);      
      const contact = res.data[0];    
      setFormData({
        username: contact.username,
        email: contact.email,
        phone: contact.phone,
      });
    } catch (err) {
      console.error("Error fetching contact:", err);
    } finally {
      setIsLoading(false);
    }
  };
  fetchContact();
}, [id]);

if (isLoading) return <p>Loading...</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/contacts/${id}`, formData);
      navigate('/');
    } catch (err) {
      console.error("Error updating contact:", err);
    }
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
