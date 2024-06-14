import cfc from '../assets/cfc.png'
import cfc_logo from '../assets/cfc_logo.png'
import palace from '../assets/palace.png'
import palace_logo from '../assets/palace_logo.png'

export function UiDesign() {
    return(
        <div id="projects">
            <div className="container">
                <div className="header-projects">
                        <h1 className="title-projects">Projects</h1>
                        <div className="choose-projects">
                            <a className="textChoose-projects" href='/projects'>Front-End</a>
                            <a className="textChoose-projects" href='/projects/uidesign'>UI Design</a>
                        </div>
                    </div>
                <div className="body-projects" id="body-projects">
                    <div className="UIDesign">
                        <div className="col-one">
                            <img src={cfc} alt="CFC - Project" className='img-project'/>
                            <img src={cfc_logo} alt="CFC - Logo" className='logo-project' />
                        </div>
                        <div className="col-two">
                            <img src={palace} alt="Palace - Project" className='img-project' />
                            <img src={palace_logo} alt="Palace - Logo" className='logo-project' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}