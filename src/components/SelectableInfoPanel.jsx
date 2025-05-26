import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './SelectableInfoPanel.scss';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

const technologyIcons = {
    'React': <FaReact className="react-icon" />,
    'HTML': <FaHtml5 className="html-icon" />,
    'CSS': <FaCss3Alt className="css-icon" />,
    'JavaScript': <IoLogoJavascript className="js-icon" />,
    'TypeScript': <BiLogoTypescript className="ts-icon" />
}   

const SelectableInfoPanel = ({ title, itemsMap, infoClass = '' }) => {
    const keys = Object.keys(itemsMap);
    const [selected, setSelected] = useState(keys[0]);
    const [hasInteracted, setHasInteracted] = useState(false);
    return (
        <motion.section 
        initial={hasInteracted ? { opacity: 0, x: 30 }: false}
        animate={hasInteracted ? { opacity: 1, x: 0 }: false}
        className="selectable-info-panel-container">
            <h1 className="info-panel-title">{title}</h1>
            <div className="selectable-info-panel">
                <div className="item-container">
                    {keys.map((item) => (
                        <h1
                            key={item}
                            className={`item ${selected === item ? 'active' : ''}`}
                            onClick={() => {
                                if(!hasInteracted) setHasInteracted(true);
                                setSelected(item)}
                            }
                        >
                            {item}
                        </h1>
                    ))}
                </div>

                <section className={`${infoClass} info-container`}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected}
                            className={'info-box'}
                            initial={hasInteracted ? { opacity: 0, x: 30 }: false}
                            animate={hasInteracted ? { opacity: 1, x: 0 }: false}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.1 }}
                        >   {itemsMap[selected].date && (
                                <h2 className="date">{itemsMap[selected].date}</h2>
                            )}
                            {itemsMap[selected].date && itemsMap[selected].technologies &&(
                                <div className="technologies">
                                    {itemsMap[selected].technologies.map((tech, idx) => (
                                        <div key={idx} className="tech-item">
                                            {technologyIcons[tech] || null}
                                            <span>{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <p>{itemsMap[selected].description}</p>
                            {itemsMap[selected].link && (
                                <a href={itemsMap[selected].link} target="_blank" rel="noopener noreferrer">
                                    {itemsMap[selected].linkText}
                                </a>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </section>
            </div>
        </motion.section>
    );
};

export default SelectableInfoPanel;
