import '../styles/globals.scss'

import imgMain from '../assets/web-development.png';


export function Home() {
    return(
        <div id="home">
            <div className="container">
                <div className="carrerExperience">
                    <h2 className="title-home">CARRER <br/>EXPERIENCE</h2>
                    <img src={imgMain} alt="Developer" />
                </div>
                <div className="yearsExperience">
                    <h1 className="experienceNumber">2+</h1><br/> 
                    <span className="experienceText">Years <br/> Experience</span>
                </div>
            </div>
        </div>
    )
}