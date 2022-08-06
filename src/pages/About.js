import '../App.css';

function About() {
    return (
        <section id="about">
            <div className="aboutIntro">
                <img className="profileImg" src="../assets/images/about/profileImg.jpg" alt="profile" />
                <h2 className="sectionTitle">
                    <span>
                        I DESIGN AND DEVELOP{` `}
                    </span>
                    <span>
                        AMBITIOUS PROJECTS WITH{` `}
                    </span>
                    <span>
                        TECHNOLOGY AND ART.
                    </span>
                </h2>
            </div>
            <div className="aboutBody">
                <p className="aboutDescription1">Born in London, grew up in Japan, interned in UAE, educated in the UK,
                    taught myself Mandarin to create documentary films with CGTN. I grew to think outside
                    the box with the multinational mindset.
                    In the software enginnering world, I am a bit of a weird one coming from the creative industry. My
                    niche lies in my creative visons coupled with technical skillsets in various mediums. For about 10
                    years, I have been in the creative industry, starting from 2015 working as a assistant fashion
                    designer in Tokyo, from 2018 freelance photograpgher and videographer at university. Now the
                    creative skillsets developed to frontend development. <br /><br />
                    I have directed, designed, and developed websites for myself, talented individuals and startups. I
                    also launched a tech startup called nocturna.io and co-desined, and developed web3 integration
                    solutions for corporations. My artwork has been featured by well-known magazines such as Vogue
                    Italia, The Independent Photo, Palatinate by Durham University. <br /><br />
                    Outside design / development work, I love investing my time in more projects such as creating
                    digital art pieces, having a constructive conversation, brainstormig business ideas, or launching
                    random but serious projects with talented people around me.
                </p>
                <br />
                <div className="aboutDescription2">
                    <div>
                        <h4>TECHNICAL SKILLS:</h4>
                        <br />
                        <p>
                            JavaScript /React / Node.js / HTML5 / CSS3 / SASS / Solidity /
                            NPM / Git / AWS / Figma / Photoshop / Lightroom / Illustrator / Premiere Pro / Blender /
                            Digital Art / Photography / Image Manipulation / Film Production / 3D Art
                        </p>
                    </div>
                    <div>
                        <h4>EDUCATION:</h4>
                        <br />
                        <ul>
                            <li>BA International Relations at the University of Exeter 2018 - 2021</li>
                            <br></br>
                            <li>MSc Human-Computer Interaction Design at City, University of London 2021 - 2022</li>
                        </ul>
                    </div>
                    <div>
                        <h4>LANGUAGES:</h4>
                        <br />
                        <p>
                            English / Japanese / Chinese (简)
                        </p>
                    </div>
                </div>
            </div>
            <div className="feature">
                <img src="../assets/images/about/feature.png" alt="partners" />
            </div>
        </section>
    );
}

export default About;