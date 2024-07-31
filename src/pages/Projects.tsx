import myBooks from '../assets/myBooks.png'
import ultraflix from '../assets/ultraflix.png'
import myHouse from '../assets/myHouse.png'

import ReactDOM from 'react-dom';


import cfc from '../assets/cfc.png'
import cfc_logo from '../assets/cfc_logo.png'
import palace from '../assets/palace.png'
import palace_logo from '../assets/palace_logo.png'
import { Design } from '../components/Design'



export function Projects() {
    let frontEndHTML = `
        <div className="FrontEnd">
            <div className="col-one" style="display: flex; flex-direction: column;">
                <img src=${myBooks} alt="MyBooks - Project" />
                <b className='text-projects' style="font: bold 1.3rem Roboto, 'sans-serif';">MyBooks</b>
                <a href="https://theus03.github.io/my-books/" className='link-projects' target="_blank">https://theus03.github.io/my-books/</a>
            </div>
            <div className="col-two" style="display: flex; flex-direction: column;">
                <img src=${ultraflix} alt="UltraFlix - Project" />
                <b className='text-projects' font: bold 1.3rem Roboto, 'sans-serif';>UltraFlix</b>
                <a href="https://theus03.github.io/ultraflix/" className='link-projects' target="_blank">https://theus03.github.io/ultraflix/</a>
            </div>
            <div className="col-three" style="display: flex; flex-direction: column;">
                <img src=${myHouse} alt="MyHouse - Project" />
                <b className='text-projects' font: bold 1.3rem Roboto, 'sans-serif';>MyHouse</b>
                <a href="https://theus03.github.io/myHouse/"  className='link-projects' target="_blank">https://theus03.github.io/myHouse/</a>
            </div>
        </div>
    `

    let designHTML = `
        <div className="UIDesign">
            <div className="col-one" style="display: flex; flex-direction: column;">
                <img src=${cfc} alt="CFC - Project" className='img-project'/>
                <img src=${cfc_logo} alt="CFC - Logo" className='logo-project' />
            </div>
            <div className="col-two" style="display: flex; flex-direction: column;">
                <img src=${palace} alt="Palace - Project" className='img-project' />
                <img src=${palace_logo} alt="Palace - Logo" className='logo-project' />
            </div>
        </div>
    `

    function showBodyProjects(showFrontEnd: boolean, showDesign: boolean) {
        let bodyProjectsDiv = document.getElementById('body-projects');
        if (bodyProjectsDiv) {
            bodyProjectsDiv.innerHTML = frontEndHTML;
            if (showFrontEnd) {
                bodyProjectsDiv.innerHTML = frontEndHTML;
            } else if (showDesign) {
                bodyProjectsDiv.innerHTML = designHTML;
            }
        }
    }

    return(
        <div id="projects">
            <div className="container">
                <div className="header-projects">
                        <h1 className="title-projects">Projects</h1>
                        <div className="choose-projects">
                            <a className="textChoose-projects" onClick={() => showBodyProjects(true, false)} >Front-End</a>
                            <a className="textChoose-projects" onClick={() => showBodyProjects(false, true)} >UI Design</a>
                        </div>
                    </div>
                <div className="body-projects" id="body-projects">
                    <div className="FrontEnd">
                        <div className="col-one">
                            <img src={myBooks} alt="MyBooks - Project" />
                            <b className='text-projects'>MyBooks</b>
                            <a href="https://theus03.github.io/my-books/" className='link-projects' target="_blank">https://theus03.github.io/my-books/</a>
                        </div>
                        <div className="col-two">
                            <img src={ultraflix} alt="UltraFlix - Project" />
                            <b className='text-projects'>UltraFlix</b>
                            <a href="https://theus03.github.io/ultraflix/" className='link-projects' target="_blank">https://theus03.github.io/ultraflix/</a>
                        </div>
                        <div className="col-three">
                            <img src={myHouse} alt="MyHouse - Project" />
                            <b className='text-projects'>MyHouse</b>
                            <a href="https://theus03.github.io/myHouse/"  className='link-projects' target="_blank">https://theus03.github.io/myHouse/</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}