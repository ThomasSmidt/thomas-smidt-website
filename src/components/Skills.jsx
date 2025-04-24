import React from 'react';
import './Skills.css';
import FloatingLogos from './FloatingLogos';

const Skills = () => {
    return(
        <section id="skills-section">
            <h1>My skills</h1>
            <FloatingLogos />
            <section id="skills-container">
                <div className="skills-box">
                    <h1>.NET</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, 
                        nostrum cum! Ab eveniet nam quas accusamus unde asperiores laboriosam. 
                        Laborum.</p>
                </div>
                <div className="skills-box">
                    <h1>React</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, 
                        nostrum cum! Ab eveniet nam quas accusamus unde asperiores laboriosam. 
                        Laborum.</p>
                </div>
                <div className="skills-box">
                    <h1>SQL</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, 
                        nostrum cum! Ab eveniet nam quas accusamus unde asperiores laboriosam. 
                        Laborum.</p>
                </div>
            </section>
            
        </section>
    );
};

export default Skills;