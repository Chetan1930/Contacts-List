// components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/"><button>Home</button></Link>
    <Link to="/add"><button>Add Contact</button></Link>
  </nav>
);

export default Navbar;
