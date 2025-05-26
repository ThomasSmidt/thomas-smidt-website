import React from 'react';
import SelectableInfoPanel from './SelectableInfoPanel';
import './ProjectsComponent.scss';

const skillDescriptions = {
    'Blackjack': {
        date: '2022',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        description: 'A simple blackjack game I made, when I was first learning web development.',
        link: '/blackjack',
        linkText: 'Try it!'
    },
    'Fast Food Ordering UI': {
        date: '2024',
        technologies: ['React', 'TypeScript', 'HTML', 'CSS'],
        description: 'A simple fast food ordering UI, which was made as part of a school project.',
        link: '/fastfood',
        linkText: 'Github Link'
    },
    'Portfolio Website': {
        date: '2025',
        technologies: ['React', 'TypeScript', 'HTML', 'CSS'],
        description: 'This portfolio website, showcasing my skills and projects.',
        link: '/fastfood',
        linkText: 'Github Link'
    }
    
};

const Projects = () => (
    <SelectableInfoPanel title="My Projects" itemsMap={skillDescriptions} infoClass={'projects'} />
);

export default Projects;
