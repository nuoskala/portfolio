
import {
  BrowserRouter as Router,
  Routes, Route //, Link
} from 'react-router-dom'

import { useState, useEffect } from 'react';

import { FaGithub } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

import Home from './Home'
import About from './About'
// import Contact from './Contact'
import Projects from './Projects';

const NavBar = () => {


    // State variables to manage scroll behavior
    const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
    const [top, setTop] = useState(0);
    useEffect(() => {
      // Function to handle scroll events
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          setTop(0); // Show navbar
        } else {
          setTop(-100); // Hide navbar
        }
        setPrevScrollpos(currentScrollPos);
      };
      // Add scroll event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
      // Clean up by removing the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollpos]);


    const navbarStyle = { 
      top: `${top}px`,
    }



  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  }

  // <Link className="navbar-link" to="/contact">contact</Link>
  // <Route path="/contact" element={<Contact />} />

  return (
    <Router>
    <nav className='navbar' style={navbarStyle} >

        <div><p className='name'>Clara Nuoskala</p></div>

        <HashLink className='navbar-link' to={'/#home'}>home</HashLink>
        <HashLink className='navbar-link' to={'/home#about'}>about</HashLink>
        <HashLink className='navbar-link' to={'/home#projects'}>projects</HashLink>

        <div className='navbar-middle'></div>

        
        <button className='navbar-button' 
                onClick={() => openInNewTab('https://github.com/nuoskala')}> <FaGithub className='navbar-icon'/>
        </button>

    </nav>

    <Routes>
        <Route path="/#home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/home#about" element={<About />} />
        <Route path="/home#projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
        

      </Routes>
    </Router>

  )
}


export default NavBar