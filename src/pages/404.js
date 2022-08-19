import '../App.css';
import '../index.css';

function Error() {
    return (
        <section id="page404">
            <h1>Oops</h1>
            <p>Hi, I don't know how you manage to come here but you have reached a 404 (error) page. Please give Claude some feedback on this website,
                any comments would be much appreciated!</p>
            <a href="/"><button id="homeBtn" type="button">Go back to Home</button></a>
        </section>
    )
}

export default Error;