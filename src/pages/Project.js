import React, { useEffect } from 'react';
import '../App.css';


function Project() {
    useEffect(() => {
        const tabs = document.querySelectorAll('[data-tab-target]')
        const tabContents = document.querySelectorAll('[data-tab-content]')

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabTarget)
                tabContents.forEach(tabContent => {
                    tabContent.classList.remove('active')
                })
                tabs.forEach(tab => {
                    tab.classList.remove('active')
                })
                tab.classList.add('active')
                target.classList.add('active')
            })
        });
    }, [])

    return (
        <section id="work">
            <div className="workBody">
                <div className="workNav">
                    <ul>
                        <li data-tab-target="#project" className="active tab">PROJECT</li>
                        <li data-tab-target="#art" className="tab">ART</li>
                        <li data-tab-target="#still" className="tab">STILL</li>
                        <li data-tab-target="#film" className="tab">FILM</li>
                    </ul>
                </div>

                <div id="project" data-tab-content className="active">
                    <div className="workGrid">
                        <div className="project">
                            <a href="https://nocturna.io" target="_blank" rel="noopener noreferrer">
                                <img src="../assets/images/work/project/nocturna.io.jpg" alt="nocturna.io" />
                            </a>
                            <div className="projectDescription">
                                <h3>Nocturna.io</h3>
                                <br />
                                <p>Nocturna.io is a tech startup based in London. They provides a B2M SaaS Toolkit that simplifies and transforms business processes in the Web3 space. The website was built on a CMS. The SaaS was designed in Figma, developped in React and Node.js, deployed on AWS with Route53, EC2, S3 configuration, pipelined with Circle CI. <br /><br /> More details coming soon.
                                </p>
                            </div>
                        </div>

                        <div className="project">
                            <img src="../assets/images/work/project/claudeando.com.jpg" alt="claudeando.com logo" />
                            <div className="projectDescription">
                                <h3>Claude Ando Portfolio</h3>
                                <br />
                                <p>Claude Ando is a frontend developer and a digital artist based on London. This website was firstly built in Vanilla JavaScript and later migrated to React. The purpose of this website is to showcase my creative and development skillsets acquired over the years. This website also authenticates if users own my NFT collection. Token holders will be redirected to a secret page of this website.
                                </p>
                            </div>
                        </div>

                        <div className="nft">
                            <a href="https://opensea.io/collection/collection-durham" target="_blank" rel="noopener noreferrer">
                                <img src="../assets/images/work/project/collection-du.jpg" alt="NFT collection durham" />
                            </a>
                            <div className="nftDescription">
                                <h3>COLLECTION DURHAM</h3>
                                <br />
                                <p>This is my first NFT collection on OpenSea. The collection features 10 pieces from
                                    Durham telling my story in Durham from #1 to #10 in numerical order. All media and metadata are permanently stored in decentralised file storage, IPFS.
                                    Utility side of this collection: The token holders will be granted access to the
                                    secret page of this website. More details coming.
                                </p>
                            </div>

                        </div>

                        <div className="project">
                            <img src="../assets/images/work/project/lealobanov.jpg" alt="lealobanov.com logo" />
                            <div className="projectDescription">
                                <h3>Full-stack Dev Portfolio</h3>
                                <br />
                                <p>Lea Lobanov is a full-stack developer based in London. Counsulted for her personal brand and identity, designed on Figma, developed in Reac with web3 authentication injection, deployed on AWS, pipelined with Circle CI. The purpose of this website is to showcase her software enginnering skills and acquire ambitious web3 projects.
                                </p>
                            </div>
                        </div>

                        <div className="project">
                            <img src="../assets/images/work/project/barbican-ar.png" alt="barbican ar" />
                            <div className="projectDescription">
                                <h3>Barbican AR</h3>
                                <br />
                                <p>Barbican AR is an mobile application that aims to improve user experience at Barbicn
                                    Centre from 3 approaches, 1. navigation 2. on-site meetups 3. discovery of Barbican.
                                </p>
                            </div>
                        </div>

                        <div className="nft">
                            <img src="../assets/images/work/project/collection-shape.png" alt="NFT generative collectible shape" />
                            <div className="nftDescription">
                                <h3>COLLECTION SHAPE</h3>
                                <br />
                                <p>What happens when the artist works with a developer in NFT space? The collection
                                    shape is a byproduct of the artist coming togerther with the full-stack developer,
                                    combining technology and art.
                                    Now, Shape is a collection of 100 individual generative artworks registered on
                                    the Ethereum blockchain. All artwork is individual and unique – 5 of them are
                                    purposely designed by the artist and hold the highest rarity. All metadata is stored
                                    directly in the decentralised storage, IPFS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="tabContents">
                    <div id="art" data-tab-content>
                        <h2>ART</h2>
                        <br />
                        <div className="art">
                            <img src="../assets/images/work/art/art1.jpg" alt="" />
                            <div className="artDescription">
                                <h3>State of the World</h3>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className="art">
                            <img src="../assets/images/work/art/art2.jpg" alt="" />
                            <div className="artDescription">
                                <h3>Clash of Ideologies</h3>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className="art">
                            <img src="../assets/images/work/art/art3.jpg" alt="" />
                            <div className="artDescription">
                                <h3>State of the World</h3>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div id="still" data-tab-content>
                        <h2>STILL</h2>
                        <br />
                        <div className="still">
                            <img src="../assets/images/work/art/ldn-rouge.jpg" alt="" />
                            <div className="stillDescription">
                                <h3>London Rouge</h3>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    <br /><br />Awarded by PhotoVogue Italia in Sep 2021
                                    <br />
                                    Featured by The Independent Photo in May 2022
                                </p>
                            </div>
                        </div>
                        <div className="still">
                            <img src="../assets/images/work/art/prs-verte.jpg" alt="" />
                            <div className="stllDescription">
                                <h3>Paris Verte</h3>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className="still">
                            <img src="../assets/images/work/art/sk-geo.jpg" alt="" />
                            <div className="stllDescription">
                                <h3>SK GEO</h3>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="film" data-tab-content>
                        <h2>FILM</h2>
                        <br></br>
                        <div className="film">
                            <iframe src="https://www.youtube.com/embed/OKzwWJcVeqM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            <div className="filmDescription">
                                <h3>Durham Short Film 2018</h3>
                                <br />
                                <p>This is the first video I've ever made and published on Youtube. Filmed
                                    and edited in winter 2018 featuring some of the most beautiful landmarks in Durham,
                                    UK. The aerial clips were all taken on DJI Mavic Air 1.
                                </p>
                            </div>
                        </div>
                        <div className="film">
                            <iframe src="https://www.youtube.com/embed/9TUXXL4uY6s" title="YouTube video player" frameBorder={0} allow="accelerometer; autoxplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            <div className="filmDescription">
                                <h3>Durham Short Film 2019</h3>
                                <br />
                                <p>This is the second video I've made and published on Youtube. Filmed
                                    and edited in winter 2019 featuring some of the most beautiful landmarks in Durham,
                                    UK.
                                </p>
                            </div>
                        </div>
                        <div className="film">
                            <iframe src="https://www.youtube.com/embed/-V6G0G7oDpM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            <div className="filmDescription">
                                <h3>鸦雀无声 2021</h3>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className="film">
                            <iframe src="https://www.youtube.com/embed/HAm5AhzvgrU" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            <div className="filmDescription">
                                <h3>You are stuck in a loop, so am I</h3>
                                <br />
                                <p>This was filmed in Freemans Quay where spent most of my time during the Covid19
                                    outbreak. I wanted to document my routine of just going putside for a short walk and
                                    coming
                                    back. Almost as if I was stuck in a loop where there is no exit plan.
                                </p>
                            </div>
                        </div>
                        <div className="film">
                            <iframe src="https://www.youtube.com/embed/XCR6Vsj4KEg" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            <div className="filmDescription">
                                <h3>Giulio Beltramo - No Control (Official Music Video)</h3>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;