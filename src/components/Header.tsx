import { Link, Outlet } from "react-router-dom"

export function Header() {
    return(
        <div id="header">
            <h1 className="title">Matheus Souza</h1>
            <h2 className="subTitle">Front-End Software Developer</h2>
            <nav>
                <ul>
                    <li>
                        <Link className="text-nav" to="/my-website/skills">Skills</Link>
                    </li>
                    <li>
                        <Link className="text-nav" to="/my-website/projects">Projects</Link>
                    </li>
                    <li>
                        <Link className="text-nav" to="/my-website/resume">Resume</Link>
                    </li>
                    <li>
                        <Link className="text-nav" to="/my-website/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}