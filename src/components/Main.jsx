import emailLogo from "../images/Mail.png"
import linkedinLogo from "../images/linkedin.png"

export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main--content">
                Business Card
            </h3>
            <h4 className="main--h4--one main--content">
                FullSatck Developer
            </h4>
            <span className="main--span--two main--content">
                Website Link Channel
            </span>

            <div className="btn--class">
                <button className="main--btn btn--email">
                    <img src={emailLogo} className="email" />
                    <a href="mailto:adolsabagh1996@gmail.com" className="link">Email</a>
                </button>
                <button className="main--btn btn--linkedin">
                    <img src={linkedinLogo} className="linkedin" />
                    <a href="www.linkedin.com/in/adel-sabagh/" className="link" target="_blank">LinkedIn</a>
                </button>
            </div>

            <div className="main--about--interest">
                <h3>About</h3>
                <p>
                As a Full Stack Developer, I designed, developed, and implemented scalable and secure web applications using front-end and back-end technologies, such as HTML, CSS, JavaScript, PHP, Laravel, and MySQL.
                I contributed to the software development life cycle and followed the Agile methodology, working with cross-functional teams and clients to deliver high-quality work.
                I also troubleshooted technical issues and improved application performance, using my excellent problem-solving skills and attention to detail.
                </p>
            </div>
        </div>
    )
}