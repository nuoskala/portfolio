
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import { FaGithub } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects';

const NavBar = () => {
  return (
    <Router>
    <nav className='navbar'>

      <div className="navbar-left">
        <Link className="navbar-link" to="/home">home</Link>
        <HashLink className='navbar-link' to={'/home#about'}>about</HashLink>
        <HashLink className='navbar-link' to={'/home#projects'}>projects</HashLink>
      </div>

      <div className="navbar-center">
      </div>

      <div className="navbar-right">
        <Link className="navbar-link" to="/contact">contact</Link>
        <FaGithub className="navbar-icons"/>
      </div>

    </nav>

    <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/home#about" element={<About />} />
        <Route path="/home#projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  )
}


export default NavBar