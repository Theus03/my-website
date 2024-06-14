import outlook from "../assets/outlook.png"
import gmail from "../assets/gmail.png"
import linkedin from "../assets/linkedin.png"


export function Contact() {
    return(
        <div className="container-contact">
            <main>
                <h2 className="title-contact">Contact Me</h2>
                <div className="box-contact">
                    <img className="outlook" src={outlook}></img>
                    <a>matheusssleite@outlook.com</a>
                </div>
                <div className="box-contact">
                    <img className="gmail" src={gmail}></img>
                    <a>matheusflute03@gmail.com</a>
                </div>
                <div className="box-contact">
                    <img className="linkedin" src={linkedin}></img>
                    <a>@matheusssleite</a>
                </div>
            </main>
        </div>
    )
}