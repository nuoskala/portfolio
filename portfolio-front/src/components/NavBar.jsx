
import {
  BrowserRouter as Router,
  Routes, Route //, Link
} from 'react-router-dom'

import { FaGithub } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

import Home from './Home'
import About from './About'
// import Contact from './Contact'
import Projects from './Projects';

const NavBar = () => {

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  }

  // <Link className="navbar-link" to="/contact">contact</Link>
  // <Route path="/contact" element={<Contact />} />

  return (
    <Router>
    <nav className='navbar'>

        <div><p className='name'>Clara Nuoskala</p></div>

        <HashLink className='navbar-link' to={'/home'}>home</HashLink>
        <HashLink className='navbar-link' to={'/home#about'}>about</HashLink>
        <HashLink className='navbar-link' to={'/home#projects'}>projects</HashLink>

        <div className='navbar-middle'></div>

        
        <button className='navbar-button' 
                onClick={() => openInNewTab('https://github.com/nuoskala')}> <FaGithub className='navbar-icon'/>
        </button>

    </nav>

    <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/home#about" element={<About />} />
        <Route path="/home#projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
        

      </Routes>
    </Router>

  )
}


export default NavBar