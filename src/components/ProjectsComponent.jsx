import React from 'react';
import SelectableInfoPanel from './SelectableInfoPanel';

const skillDescriptions = {
    'Blackjack': {
        description: '[2022] A simple blackjack game I made, when I was starting to learn HTML, CSS, and JavaScript.',
        link: '/blackjack',
        linkText: 'Try it!'
    },
    'Fast Food Ordering App': {
        description: '[2024] A simple fast food ordering UI, which was made as part of a school project, made using React.',
        link: '/fastfood',
        linkText: 'Github Link'
    }
    
};

const Projects = () => (
    <SelectableInfoPanel title="My Projects" itemsMap={skillDescriptions} />
);

export default Projects;
