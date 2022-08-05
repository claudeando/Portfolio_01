import '../App.css';
import '../index.css';

function Error() {
    return (
        <section id="page404">
            <h1>Oops</h1>
            <p>I am sorry, this page is under development. Please give Claude another couple of days to figure out
                what
                to do with this empty link. In the meanwhile, you might wish to send him some feedback on this
                website -
                any comments would be much appreciated!</p>

            <button type="button"><a href="../index.html">Go back to Home</a></button>
        </section>
    )
}

export default Error;