import React, { useState } from 'react';
import FloatingLogos from './FloatingLogos';
import './Skills.scss';

const skillDescriptions = {
    '.NET': 'Experience building backend services using .NET technologies.',
    'Angular': 'Built SPAs with Angular, RxJS, and TypeScript.',
    'React': 'Created modern UIs with React, Redux, and hooks.',
    'ASP.NET': 'Developed dynamic web applications using ASP.NET Core MVC.',
    'SQL': 'Designed and optimized relational databases with SQL Server.',
    'xUnit': 'Wrote unit tests for .NET applications with xUnit framework.',
    'Moq': 'Used Moq for creating mock objects during unit testing.'
};

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState('.NET');

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    return (
        <section id="skills-section">
            <h1>My skills</h1>
            <FloatingLogos 
            onSkillClick={handleSkillClick} 
            selectedSkill={selectedSkill}
            />

            <section id="skills-container">
                <div className="skills-box">
                    <p>{skillDescriptions[selectedSkill]}</p>
                </div>
            </section>
        </section>
    );
};

export default Skills;
