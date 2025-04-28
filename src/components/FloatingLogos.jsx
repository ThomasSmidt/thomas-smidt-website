import React from 'react';
import './FloatingLogos.scss';

const skills = ['.NET', 'Angular', 'React', 'ASP.NET', 'SQL', 'xUnit', 'Moq'];

const FloatingLogos = ({ onSkillClick, selectedSkill }) => {
    return (
        <div id="skill-item-container">
            {skills.map((skill) => (
                <h1 
                    key={skill} 
                    className={`skill-item ${selectedSkill.toString() === skill ? 'active' : ''}`}
                    onClick={() => onSkillClick(skill)}
                >
                    {skill}
                </h1>
            ))}
        </div>
    );
};

export default FloatingLogos;
