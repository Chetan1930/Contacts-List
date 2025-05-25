import { useEffect, useState } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const API = 'api/contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API);
      setContacts(res.data);
    } catch (err) {
      console.error('Error fetching contacts:', err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h1>📱 Contact Book</h1>
      <ContactForm
        contactToEdit={contactToEdit}
        refreshContacts={fetchContacts}
        clearEdit={() => setContactToEdit(null)}
      />
      <ContactList
        contacts={contacts}
        refreshContacts={fetchContacts}
        setEditContact={setContactToEdit}
      />
    </div>
  );
};

export default App;
