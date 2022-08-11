import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Project from './pages/Project.js';
import Contact from './pages/Contact.js';
import Loading from './pages/Loading.js';
// import Error from './pages/404.js';

import P5 from './p5.js';
// import Web3 from './web3.js';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import ReactGA from 'react-ga';

const TRACKING_ID = "G-23SXWNFYHN"; // YOUR_OWN_TRACKING_ID

ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname);



function Header() {

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLis = document.querySelectorAll('nav ul li');

    window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      })

      navLis.forEach(navLi => {
        navLi.classList.remove('active');
        if (navLi.classList.contains(current)) {
          navLi.classList.add('active');
        }
      })
    })
  }, [])

  return (
    <header>
      <div className="logo">
        <a href="index.html"><img src="../assets/utility/logo.png" alt="a logo" /></a>
      </div>
      <nav>
        <ul className="mainMenu">
          <li className="home active"><a href="#home">HOME</a></li>
          <li className="about"><a href="#about">ABOUT</a></li>
          <li className="work"><a href="#work">WORK</a></li>
          <li className="contact"><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  )
}


function Footer() {
  return (
    <footer>
      <div className="socialIcons">
        <a href="https://github.com/claudeando" target="_blank" rel="noopener noreferrer"
          className="fa fa-github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/claudeando" target="_blank" rel="noopener noreferrer"
          className="fa fa-linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/al__claude/" target="_blank" rel="noopener noreferrer"
          className="fa fa-instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="footerSection">
        <p>© 2022 Claude Ando / All rights reserved</p>
      </div>
    </footer>
  )
}



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
      {!loading ? (
        <>
          <Header></Header>

          <main>
            <div id="canvasForHTML" />
            <P5></P5>

            <Home></Home>
            <About></About>
            <Project></Project>
            <Contact></Contact>
            {/* <Error></Error> */}
          </main>

          {/* <Web3></Web3> */}
          <Footer></Footer>
        </>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}

export default App;