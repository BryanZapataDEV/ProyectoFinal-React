import React, { useState } from 'react';

export const PestanaMenuCombo = ({ tabs, callTabActivo }) => {


  const [tabActivo, setActiveTab] = useState(0);

  const changeTab = (index) => {
    console.log('tabsSelect ', index);
    console.log('tabActivo ', tabActivo);
    callTabActivo(index);
    setActiveTab(index)
  };

  return (
    <nav className="tabs">
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li className={`tab-header ${tab.id === tabActivo ? 'active' : ''}`} key={tab.id}>
            <button onClick={() => changeTab(tab.id)} >
              {tab.name}
            </button>
          </li>
        ))}
        {/* <a className="tab-content">
          {tabs[tabActivo].content}
        </a> */}
      </ul>
    </nav>
  );
};