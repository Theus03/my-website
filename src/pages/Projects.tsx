import { useState } from 'react';

import myBooks from '../assets/myBooks.png';
import ultraflix from '../assets/ultraflix.png';

import cfc from '../assets/cfc.png';
import cfc_logo from '../assets/cfc_logo.png';
import palace from '../assets/palace.png';
import palace_logo from '../assets/palace_logo.png';

interface ProjectProps {
    imgSrc: string;
    title: string;
    link: string;
}

const Project = function ({ imgSrc, title, link }: ProjectProps) {
    return (
        <div className="col-one">
            <img src={imgSrc} alt={`${title} - Project`} />
            <b className='text-projects'>{title}</b>
            <a href={link} className='link-projects' target="_blank" rel="noopener noreferrer">{link}</a>
        </div>
    );
};

const FrontEndProjects = () => (
    <div className="FrontEnd">
        <div className='col-one'>
            <Project imgSrc={myBooks} title="MyBooks" link="https://theus03.github.io/my-books/" />
        </div>
        <div className="col-two">
            <Project imgSrc={ultraflix} title="UltraFlix" link="https://theus03.github.io/ultraflix/" />
        </div>
    </div>
);

const UIDesignProjects = () => (
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
);

export function Projects() {
    const [showFrontEnd, setShowFrontEnd] = useState(true);

    return (
        <div id="projects">
            <div className="container">
                <div className="header-projects">
                    <h1 className="title-projects">Projects</h1>
                    <div className="choose-projects">
                        <a className="textChoose-projects" onClick={() => setShowFrontEnd(true)}>Front-End</a>
                        <a className="textChoose-projects" onClick={() => setShowFrontEnd(false)}>UI Design</a>
                    </div>
                </div>
                <div className="body-projects" id="body-projects">
                    {showFrontEnd ? <FrontEndProjects /> : <UIDesignProjects />}
                </div>
            </div>
        </div>
    );
}
