import React from "react";
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const LateralInfo = () => {
    return (
        <section className="lateral-bar">
            <div className="lateral-bar-info">
                <a href="https://github.com/NicolasMouraC" target="_blank" rel="noreferrer" className="lateral-bar-button">
                    <button type="button" className="icon">
                        <BsGithub />
                        <span style={{color: "black"}}>Github</span>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/nicolas-moura-b677b8232/" target="_blank" rel="noreferrer" className="lateral-bar-button">
                    <button type="button" className="icon">
                        <BsLinkedin />
                        <span style={{color: "black"}}>Linkedin</span>
                    </button>
                </a>
            </div>
        </section>
    )
}

export default LateralInfo;