import vsCode from '../assets/vsCode.png';
import visualStudio from '../assets/visual-basic.png';
import androidStudio from '../assets/androidStudio.png';
import Pycharm from '../assets/pycharm.png';
import SublimeText from '../assets/sublime.png';
import Eclipse from "../assets/eclipse.png";
import Netbeans from "../assets/netbeans.png";


export function Editors() {
    return (
        <div id="skills">
            <div className="container">
                <div className="header-skills">
                    <h1 className="title-skills">My Skills</h1>
                    <div className="choose-skills">
                        <a href="/skills" className="text-skills">Languages</a>
                        <a href="/skills/editors" className="text-skills">Editors</a>
                        <a href='/skills/design' className="text-skills">Design</a>
                    </div>
                </div>
                <div className="body-skills" id="body-skills">
                    <div className="col-one">
                        <img src={vsCode} id="vsCode" alt="Visual Studio Code" />
                        <img src={visualStudio} alt="Visual Studio" />
                        <img src={androidStudio} alt="Android Studio" />
                        <img src={Pycharm} alt="Pycharm" />
                        <img src={SublimeText} alt="Sublime Text" />
                    </div>
                    <div className="col-two">
                        <img src={Eclipse} alt="Eclipse" />
                        <img src={Netbeans} alt="Netbeans" />
                    </div>
                </div>
            </div>
        </div>
    )
}