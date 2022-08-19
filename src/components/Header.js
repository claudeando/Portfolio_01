import React, { useEffect } from 'react';
import '../App.css';
import '../index.css';

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
            <div id="logo">
                <a href="/"><img src="../assets/utility/logo.png" alt="a logo" /></a>
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

export default Header;