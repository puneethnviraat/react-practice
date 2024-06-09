import React, { useState } from 'react';
import { data } from './data';
import './style.css';
const CustomTabs = () => {
  const [currenIndex, setCurrentIndex] = useState(0);
  const changeTab = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="main-container">
      <h1>Custom tabs</h1>
      return (
      <div className="wrapper">
        <div className="heading">
          {data.map((tabItem, index) => (
            <div
              className={`tab-item ${currenIndex === index ? 'active' : ''}`}
              onClick={() => changeTab(index)}
              key={tabItem.label}
            >
              <span className="label">{tabItem.label}</span>
            </div>
          ))}
        </div>
        <div className="content" style={{ color: 'red' }}>
          {data[currenIndex] && data[currenIndex].content}
        </div>
      </div>
      );
    </div>
  );
};

export default CustomTabs;
