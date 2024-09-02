import myBooks from '../assets/myBooks.png'
import ultraflix from '../assets/ultraflix.png'
import myHouse from '../assets/myHouse.png'
import { Link } from 'react-router-dom'

export function Projects() {
    return(
        <div id="projects">
            <div className="container">
                <div className="header-projects">
                        <h1 className="title-projects">Projects</h1>
                        <div className="choose-projects">
                            <Link className="textChoose-projects" to="/my-website/skills/projects">Skills</Link>
                            <a className="textChoose-projects" href='/projects'>Front-End</a>
                            <a className="textChoose-projects" href='/projects/uidesign'>UI Design</a>
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
                            <a href="https://myhouse-dev.vercel.app/"  className='link-projects' target="_blank">https://myhouse-dev.vercel.app/</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}