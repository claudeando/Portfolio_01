import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";


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

export default Footer;