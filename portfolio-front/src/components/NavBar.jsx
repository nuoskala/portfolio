
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import { FaGithub } from "react-icons/fa";

import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const NavBar = () => {
  return (
    <Router>
    <nav className='navbar'>

      <div className="navbar-left">
        <Link className="navbar-left-elt" to="/">home</Link>
        <Link className="navbar-left-elt" to="/about">about</Link>
        <Link className="navbar-left-elt" to="/projects">projects</Link>
        <Link className="navbar-left-elt" to="/contact">contact</Link>
      </div>

      <div className="navbar-right">
        <FaGithub/>
      </div>

    </nav>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}


export default NavBar