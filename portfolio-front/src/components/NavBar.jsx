import { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

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

  const isActiveStyle = ({ isActive }) =>
    isActive
      ? {
        textDecoration: "underline solid .2rem hwb(204 62% 16%)",
        textUnderlinePosition: "under",
        textDecorationSkipInk: "none",
      }
      : { }

  // <Link className="navbar-link" to="/contact">contact</Link>
  // <Route path="/contact" element={<Contact />} />

  return (
    <nav className='navbar' style={navbarStyle} >

        <div><p className='name'>Clara Nuoskala</p></div>

        <NavLink className='navbar-link' to={'/home'} style={isActiveStyle}>home</NavLink>
        <NavLink className='navbar-link' to={'/about'} style={isActiveStyle}>about</NavLink>
        <NavLink className='navbar-link' to={'/projects'} style={isActiveStyle}>projects</NavLink>

        <div className='navbar-middle'></div>

        
        <button className='navbar-button' 
                onClick={() => openInNewTab('https://github.com/nuoskala')}> <FaGithub className='navbar-icon'/>
        </button>

    </nav>



  )
}


export default NavBar