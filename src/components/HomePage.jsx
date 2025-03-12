import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import { learningPath } from '../data/learn-how-to-code';
import './HomePage.css';

const TopicFolder = ({ topic }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="folder-container">
      <div 
        className={`folder-header ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="folder-title">{topic.title}</span>
        <AiOutlineRight className={`folder-icon ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="folder-content">
          {topic.subtopics.map((subtopic, index) => (
            <Link key={index} to={subtopic.path} className="folder-item">
              {subtopic.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>UI Component Library</h1>
      <p className="intro-text">
        Explore our collection of reusable UI components. Click on a folder to view its components.
      </p>
      <div className="folders-container">
        {learningPath.map((topic, index) => (
          <TopicFolder key={index} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default HomePage; 