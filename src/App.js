import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';


import './App.css';
import './index.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Project from './pages/Project.js';
import Contact from './pages/Contact.js';
import Loading from './pages/Loading.js';
import Error from './pages/404.js';

import P5 from './p5.js';
// import Web3 from './web3.js';

const TRACKING_ID = "G-23SXWNFYHN"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function Main() {
  return (
    <>
      <Home />
      <About />
      <Project />
      <Contact />
    </>
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
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>

          <aside>
            <P5></P5>
          </aside>

          {/* <Web3></Web3> */}
          <Footer></Footer>
        </>
      ) : (
        <Loading></Loading>
      )}
    </>
  )
}

export default App;