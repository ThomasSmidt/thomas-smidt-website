// SelectableInfoPanel.jsx
import React, { useState } from 'react';
import './SelectableInfoPanel.scss';

const SelectableInfoPanel = ({ title, itemsMap }) => {
    const keys = Object.keys(itemsMap);
    const [selected, setSelected] = useState(keys[0]);

    const selectedData = itemsMap[selected]

    return (
        <section className="selectable-info-panel">
            <h1>{title}</h1>
            <div className="item-container">
                {keys.map((item) => (
                    <h1
                        key={item}
                        className={`item ${selected === item ? 'active' : ''}`}
                        onClick={() => setSelected(item)}
                    >
                        {item}
                    </h1>
                ))}
            </div>

            <section className="info-container">
                <div className="info-box">
                    <p>{selectedData.description}</p>
                        {selectedData.link && (
                            <a href={selectedData.link} target="_blank" rel="noopener noreferrer">
                                {selectedData.linkText}
                            </a>
                        )}
                </div>
            </section>
        </section>
    );
};

export default SelectableInfoPanel;
