import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
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
  const topics = [
    {
      title: "Programming Introduction",
      subtopics: [
        { name: "What is programming ?", path: "https://v0-vamsi-training-comps-vpwbjw.vercel.app/" }
      ]
    },
    {
      title: "Variables",
      subtopics: [
        { name: "Understanding Variables", path: "https://v0-robot-programming-lqt1sbcf28a-ggnjtq.vercel.app/" },
        { name: "Reusing of Variables", path: "https://v0-robot-programming-lqt1sbcf28a-lqvx9l.vercel.app/" },
        { name: "Changing the Value of Variable", path: "https://v0-robot-programming-lqt1sbcf28a-zpea30.vercel.app/" },
        
      ]
    },
    {
      title: "Data Types",
      subtopics: [
        { name: "Introduction to DataTypes", path: "https://v0-vamsi-training-comps-nyocco.vercel.app/" },
        { name: "Understanding the Number Data Type", path: "https://v0-vamsi-training-comps-rnuxfx.vercel.app/" },
        { name: "The Story of a String", path: "https://v0-vamsi-training-comps-kf4jfi.vercel.app/" },
        { name: "Understanding Boolean Data Type", path: "https://v0-vamsi-training-comps-ck5bbm.vercel.app/" }
      ]
    },
    {
      title: "Symbols & Operators",
      subtopics: [
        { name: "Introduction to Symbols", path: "https://5k7dpnsviirhloeh.vercel.app/" },
        { name: "Calculations using Operators", path: "https://v0-vamsi-training-comps-wh4xgo.vercel.app/" },
        { name: "Comparisions Using Operators", path: "https://v0-vamsi-training-comps-aqzn7j.vercel.app/" },
        { name: "Multiple Comparisons", path: "https://v0-vamsi-training-comps-l8jkwr.vercel.app/" }
      ]
    },
    {
      title: "Functions",
      subtopics: [
        { name: "Introduction to Functions", path: "https://v0-vamsi-training-comps-sj7rme.vercel.app/" },
        { name: "Function Reusability", path: "https://v0-vamsi-training-comps-fkxgqj.vercel.app/" },
        { name: "Flexible Functions", path: "https://v0-vamsi-training-comps-z58bp5.vercel.app/" },
        { name: "Function Organizing", path: "https://v0-vamsi-training-comps-7xmwli.vercel.app/" },
      ]
    },
    {
      title: "Program Flow",
      subtopics: [
        { name: "Understand the Control Flow", path: "https://v0-vamsi-training-comps-owfw3e.vercel.app/" },
        { name: "Understanding Conditionals", path: "https://v0-vamsi-training-comps-xiseoc.vercel.app/" },
        { name: "Understanding Loops", path: "https://rskwjpu2nzv3gqtl.vercel.app/" },
        { name: "Handling Exceptions", path: "https://v0-vamsi-training-comps-mcalia.vercel.app/" },
        
      ]
    },
    {
      title: "Lists",
      subtopics: [
        { name: "Introduction to List", path: "https://v4bnsdqbp01scqlq.vercel.app/" },
        { name: "Accessing Items to List", path: "https://qotioao3xiwldd5f.vercel.app/" },
        { name: "Adding Items to List", path: "https://2mdi33nid4owkafg.vercel.app/" },
        { name: "Removing items from List", path: "https://v0-vamsi-training-comps-ykazaw.vercel.app/" },
       
      ]
    },
    {
      title: "Loops",
      subtopics: [
        { name: "Understanding Loops in Programming", path: "https://v0-vamsi-training-comps-nu7of0.vercel.app/" },
        { name: "Understanding For Loop", path: "https://v0-vamsi-training-comps-bnwd5o.vercel.app/" },
        { name: "Understanding While Loop", path: "https://p0ha8tua1xsb03m3.vercel.app/" },
        { name: "Understanding ForEach Loop", path: "https://abgodkue6fl29cu9.vercel.app/" },
      
      ]
    }
  ];

  return (
    <div className="home-container">
      <h1>UI Component Library</h1>
      <p className="intro-text">
        Explore our collection of reusable UI components. Click on a folder to view its components.
      </p>
      <div className="folders-container">
        {topics.map((topic, index) => (
          <TopicFolder key={index} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default HomePage; 