// Skills.jsx
import React from 'react';
import SelectableInfoPanel from './SelectableInfoPanel';

const skillDescriptions = {
    '.NET': {
        description: 'Proficient in building scalable backend services and APIs using .NET and C#, including integration with Entity Framework.'
    },
    'Angular': {
        description: 'Skilled in developing dynamic single-page applications with Angular, often used in combination with ASP.NET backends.'
    },
    'React': {
        description: 'Experienced in building modern and responsive UIs using React, including this website and other component-driven frontends.'
    },
    'ASP.NET': {
        description: 'Experienced in building full-stack web applications using ASP.NET Core, with RESTful APIs and integration with frontend frameworks like Blazor and Angular.'
    },
    'TypeScript': {
        description: 'Skilled in using TypeScript for building type-safe, maintainable frontend applications in frameworks such as Angular and React.'
    },
    'JavaScript': {
        description: 'Proficient in JavaScript for both frontend and tooling development.'
    },
    'SQL': {
        description: 'Experience writing complex queries, designing schemas, and working with relational databases using SQL and Entity Framework.'
    },
    'Git': {
        description: 'Proficient in version control with Git, including branching strategies, code reviews, and collaborative workflows via GitHub and GitLab.'
    },
    'xUnit': {
        description: 'Experienced in writing unit and integration tests using xUnit for .NET applications to ensure code reliability and maintainability.'
    },
    'Moq': {
        description: 'Skilled in using Moq to create test doubles for unit testing in .NET applications, improving test coverage and isolation.'
    },
};


export default function Skills() {
    return <SelectableInfoPanel title="My Skills" itemsMap={skillDescriptions} infoClass={"skills"} />;
}
