import axios from 'axios';

const API = 'api/contacts';

const ContactList = ({ contacts, refreshContacts, setEditContact }) => {
  const deleteContact = async (id) => {
  if (!window.confirm('Are you sure you want to delete this contact?')) return;
  try {
    await axios.delete(`${API}/${id}`);
    refreshContacts();
  } catch (err) {
    console.error('Error deleting contact:', err);
  }
};


  return (
    <div className="contact-list">
      {contacts.map((c) => (
        <div key={c._id} className="contact-card">
          <p><strong>{c.username}</strong></p>
          <p>{c.email}</p>
          <p>{c.phone}</p>
          <button onClick={() => setEditContact(c)}>Edit</button>
          <button onClick={() => deleteContact(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
