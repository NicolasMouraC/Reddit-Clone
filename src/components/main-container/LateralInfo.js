import React from "react";
import { BsLinkedin, BsGithub, BsFillBriefcaseFill } from 'react-icons/bs';

const LateralInfo = () => {
    return (
        <section className="lateral-bar">
            <div className="lateral-bar-info">
                <a href="https://nicolasmoura.online" target="_blank" rel="noreferrer" className="lateral-bar-button">
                    <button type="button" className="icon">
                        <BsFillBriefcaseFill />
                        <span>Portfolio</span>
                    </button>
                </a>
                <a href="https://github.com/NicolasMouraC" target="_blank" rel="noreferrer" className="lateral-bar-button">
                    <button type="button" className="icon">
                        <BsGithub />
                        <span>Github</span>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/nicolas-moura-b677b8232/" target="_blank" rel="noreferrer" className="lateral-bar-button">
                    <button type="button" className="icon">
                        <BsLinkedin />
                        <span>Linkedin</span>
                    </button>
                </a>
            </div>
        </section>
    )
}

export default LateralInfo;