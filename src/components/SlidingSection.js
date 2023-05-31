import FeatureButton from './FeatureButton'; 
import  React, { useState } from 'react';
import './SlidingSection.css';

const SlidingSection = ({ intro, title, content, keyProp }) => {
    const [activeItem, setActiveItem] = useState(null);
    const features = content.features;

    const handleClick = (itemIndex) => {
      setActiveItem(itemIndex === activeItem ? null : itemIndex);
    };

    if (content.color) {
        const element = document.getElementById(`section-${keyProp}`)
        if (element) {
            element.style.backgroundColor = content.color;
        }
    }

    return (
      <div className="slide">
        <div className="slide-content">
          <h3>{intro}</h3>
          <h1>{title}</h1>
          {features && features.map((item) => (
            <div key={features.indexOf(item)}>
              <button onClick={() => handleClick(features.indexOf(item))}>
                {item.title}
              </button>
            </div>
          ))}
          {features && features.map((item) => (
            <div key={features.indexOf(item)}>
              {activeItem === features.indexOf(item) && <img src={item.image} />}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default SlidingSection;