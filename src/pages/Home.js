import React, { useState, useEffect } from 'react';
import '../App.css';

function Home() {

    return (
        <section id="home">
            <div className="homeBody1">
                <h1>
                    <span id="安藤蔵人">安<br />藤<br />蔵<br />人</span>
                </h1>
            </div>
            <div className="homeBody2">
                <h2><span id="changingText" /></h2>
                <p>This is a Claude Ando creative portfolio where I showcase my web development skillsets
                    coupled with my creative visions. Designed in Figma, developed in React with p5.js and web3.js injection, deployed on AWS with Route53, EC2, and S3 bucket configuration, pipelined with Circle CI.
                    More details in the project section down below.
                </p>
                <a href="#contact"><button id="homeBtn" type="button">Contact</button></a>
            </div>
        </section>
    );
}

export default Home;