// components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/"><button>Home</button></Link>
    <Link to="/add"><button>Add Contact</button></Link>
  </nav>
);

export default Navbar;
