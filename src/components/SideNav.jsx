import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import { getSideNavData } from '../data/learn-how-to-code';
import './SideNav.css';

const NavItem = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.subtopics) {
    return (
      <li className={`nav-item level-${level}`}>
        <div className="nav-link" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineDown className="nav-icon" /> : <AiOutlineRight className="nav-icon" />}
          <span>{item.title}</span>
        </div>
        {isOpen && (
          <ul className="nav-list nested">
            {item.subtopics.map((subitem, index) => (
              <NavItem key={index} item={subitem} level={level + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className={`nav-item level-${level}`}>
      <a href={item.path} className="nav-link">
        {item.icon && <item.icon className="nav-icon" />}
        <span>{item.title}</span>
      </a>
    </li>
  );
};

const SideNav = () => {
  const navigationData = getSideNavData();
  
  return (
    <nav className="sidenav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <AiOutlineHome className="nav-icon" />
            <span>Home</span>
          </a>
        </li>
        {navigationData.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default SideNav; 