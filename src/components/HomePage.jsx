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
        { name: "What is programming ?", path: "/programming-intro" }
      ]
    },
    {
      title: "Variables",
      subtopics: [
        { name: "Understanding Variables", path: "/understanding-variables" },
        { name: "Reusing of Variables", path: "/reusing-variables" },
        { name: "Changing the Value of Variable", path: "/changing-variables" },
        { name: "Quick Recap of Variables", path: "/variables-recap" },
        { name: "Quiz on Variables", path: "/variables-quiz" }
      ]
    },
    {
      title: "Data Types",
      subtopics: [
        { name: "Introduction to DataTypes", path: "/intro-datatypes" },
        { name: "Understanding the Number Data Type", path: "/number-datatype" },
        { name: "The Story of a String", path: "/string-datatype" },
        { name: "Understanding Boolean Data Type", path: "/boolean-datatype" }
      ]
    },
    {
      title: "Symbols & Operators",
      subtopics: [
        { name: "Introduction to Symbols", path: "/intro-symbols" },
        { name: "Calculations using Operators", path: "/calculations-operators" },
        { name: "Comparisions Using Operators", path: "/comparisons-operators" },
        { name: "Multiple Comparisons", path: "/multiple-comparisons" }
      ]
    },
    {
      title: "Functions",
      subtopics: [
        { name: "Introduction to Functions", path: "/intro-functions" },
        { name: "Function Reusability", path: "/function-reusability" },
        { name: "Flexible Functions", path: "/flexible-functions" },
        { name: "Function Organizing", path: "/function-organizing" },
        { name: "Quick Recap On Functions", path: "/functions-recap" }
      ]
    },
    {
      title: "Program Flow",
      subtopics: [
        { name: "Understand the Control Flow", path: "/control-flow" },
        { name: "Understanding Conditionals", path: "/understanding-conditionals" },
        { name: "Understanding Loops", path: "/understanding-loops" },
        { name: "Handling Exceptions", path: "/handling-exceptions" },
        { name: "Quick Recap on Flow", path: "/flow-recap" },
        { name: "Quiz on Control Flow", path: "/control-flow-quiz" }
      ]
    },
    {
      title: "Lists",
      subtopics: [
        { name: "Introduction to List", path: "/intro-list" },
        { name: "Accessing Items to List", path: "/accessing-list-items" },
        { name: "Adding Items to List", path: "/adding-list-items" },
        { name: "Removing items from List", path: "/removing-list-items" },
        { name: "Quick Recap on List", path: "/list-recap" },
        { name: "Quiz on List", path: "/list-quiz" }
      ]
    },
    {
      title: "Loops",
      subtopics: [
        { name: "Understanding Loops in Programming", path: "/intro-loops" },
        { name: "Understanding For Loop", path: "/for-loop" },
        { name: "Understanding While Loop", path: "/while-loop" },
        { name: "Understanding ForEach Loop", path: "/foreach-loop" },
        { name: "Quick Recap of Loops", path: "/loops-recap" },
        { name: "Quiz on Loops", path: "/loops-quiz" }
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