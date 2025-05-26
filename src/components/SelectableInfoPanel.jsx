import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './SelectableInfoPanel.scss';

const SelectableInfoPanel = ({ title, itemsMap }) => {
    const keys = Object.keys(itemsMap);
    const [selected, setSelected] = useState(keys[0]);
    const [hasInteracted, setHasInteracted] = useState(false);
    return (
        <section className="selectable-info-panel-container">
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

                <section className="info-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected} // This triggers re-animation on key change
                            className="info-box"
                            initial={hasInteracted ? { opacity: 0, x: 30 }: false}
                            animate={hasInteracted ? { opacity: 1, x: 0 }: false}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.1 }}
                        >
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
        </section>
    );
};

export default SelectableInfoPanel;
