// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ContactList from './components/ContactList';
import './App.css';


function App() {
  return (
     <div className="container">
    <Router>
      < Navbar className="navbar" />
      <Routes>
        <Route path="/" element={<ContactList  className="contact-list" />} />
        <Route path="/add" element={<AddContact className="contact-card" />} />
        <Route path="/edit/:id" element={<EditContact className="contact-form" />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
