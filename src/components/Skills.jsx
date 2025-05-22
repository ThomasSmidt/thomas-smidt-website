// Skills.jsx
import React from 'react';
import SelectableInfoPanel from './SelectableInfoPanel';

const skillDescriptions = {
    '.NET': {
        description: 'Experience building backend services using .NET technologies.'
    },
    'Angular': {
        description: 'Experience building frontend UIs using Angular, combined with an ASP.NET and Entity Framework backend.'
    },
    'React': {
        description: 'Experience building frontend UIs using react, including but not limited to, this website.'
    },
    'ASP.NET': {
        description: 'Experience building full-stack apps with an ASP.NET and Entity framework backend and Blazor/Angular frontend.'
    },
    'SQL': {
        description: 'Experience building backend services using .NET technologies.'
    },
    'xUnit': {
        description: 'Experience building backend services using .NET technologies.'
    },
    'Moq': {
        description: 'Experience building backend services using .NET technologies.'
    },
};

export default function Skills() {
    return <SelectableInfoPanel title="My Skills" itemsMap={skillDescriptions} />;
}
