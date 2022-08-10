import '../App.css';
import { PopupButton } from "react-calendly";

function Contact() {
    return (
        <section id="contact">
            <div className="contactDescription">
                <h2 className="sectionTitle">AVAILABLE FOR PROJECT</h2>
                <p>Feel free to inquire me if your have any creative or development projects. Even if it is
                    something that is not within my domain, I might still be able to recommend talented people from my
                    contacts. <br /><br />
                    Or, book a 30 min session and discuss your project over a call below.
                </p>
                <br />
                <a href="mailto: info@claudeando.com"><button type="button">info@claudeando.com</button></a>
                <PopupButton
                    url='https://calendly.com/claudeando/30min?hide_gdpr_banner=1&primary_color=a6566b'
                    /*
                     * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                     * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                     */
                    rootElement={document.getElementById("root")}
                    text="Schedule a call 🗓"
                />
            </div>
        </section>
    );
}

export default Contact;