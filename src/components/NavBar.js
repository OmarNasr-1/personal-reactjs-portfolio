import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo3.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/icons8-whatsapp.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // Close navbar when a link is clicked
  }

  return (
    <Router>
      <Navbar 
        expand="md" 
        className={`${scrolled ? "scrolled" : ""} ${expanded ? "navbar-expanded" : ""}`}
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a title="linkedin" className="mb-1" target="_blank" href="https://www.linkedin.com/in/omarnasr-1/"><img src={navIcon1} alt="" /></a>
                <a title="github" className="mb-1" target="_blank" href="https://github.com/OmarNasr-1"><img src={navIcon2} alt="" /></a>
                <a title="instagram" target="_blank" href="https://www.instagram.com/omar._nasr/"><img src={navIcon3} alt="" /></a>
                <a title="whatsapp" target="_blank" href="https://wa.me/01158952209"><img className="text-light" src={navIcon4} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="nav-btn"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
