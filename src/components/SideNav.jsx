import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
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
  const navigationData = [
    {
      title: "Learn How to Code (New)",
      subtopics: [
        {
          title: "Basics Of Programming {M}",
          subtopics: [
            {
              title: "Programming Introduction {T}",
              subtopics: [
                {
                  title: "What is programming ?",
                  path: "/programming-intro"
                }
              ]
            },
            {
              title: "What Are Variables? {T}",
              subtopics: [
                {
                  title: "Understanding Variables",
                  path: "/understanding-variables"
                },
                {
                  title: "Reusing of Variables",
                  path: "/reusing-variables"
                },
                {
                  title: "Changing the Value of Variable",
                  path: "/changing-variables"
                },
                {
                  title: "Quick Recap of Variables",
                  path: "/variables-recap"
                },
                {
                  title: "Quiz on Variables",
                  path: "/variables-quiz"
                }
              ]
            },
            {
              title: "Types of Information(Data Types) {T}",
              subtopics: [
                {
                  title: "Introduction to DataTypes",
                  path: "/intro-datatypes"
                },
                {
                  title: "Understanding the Number Data Type",
                  path: "/number-datatype"
                },
                {
                  title: "The Story of a String",
                  path: "/string-datatype"
                },
                {
                  title: "Understanding Boolean Data Type",
                  path: "/boolean-datatype"
                },
              ]
            },
            {
              title: "Symbols in programming{T}",
              subtopics: [
                {
                  title: "Introduction to Symbols",
                  path: "/intro-symbols"
                },
                {
                  title: "Calculations using Operators",
                  path: "/calculations-operators"
                },
                {
                  title: "Comparisions Using Operators",
                  path: "/comparisons-operators"
                },
                {
                  title: "Multiple Comparisons",
                  path: "/multiple-comparisons"
                },
              ]
            }
          ]
        },
        {
          title: "Basics Of Programming II {M}",
          subtopics: [
            {
              title: "Functions in Programming{T}",
              subtopics: [
                {
                  title: "Introduction to Functions",
                  path: "/intro-functions"
                },
                {
                  title: "Function Reusability",
                  path: "/function-reusability"
                },
                {
                  title: "Flexible Functions",
                  path: "/flexible-functions"
                },
                
              ]
            },
            {
              title: "Flow of Programs{T}",
              subtopics: [
                {
                  title: "Understand the Control Flow",
                  path: "/control-flow"
                },
                {
                  title: "Understanding Conditionals",
                  path: "/understanding-conditionals"
                },
                {
                  title: "Understanding Loops",
                  path: "/understanding-loops"
                },
                {
                  title: "Handling Exceptions",
                  path: "/handling-exceptions"
                },
               
              ]
            }
          ]
        },
        {
          title: "Basics Of Programming III {M}",
          subtopics: [
            {
              title: "List in Programming{T}",
              subtopics: [
                {
                  title: "Introduction to List",
                  path: "/intro-list"
                },
                {
                  title: "Accessing Items to List",
                  path: "/accessing-list-items"
                },
                {
                  title: "Adding Items to List",
                  path: "/adding-list-items"
                },
                {
                  title: "Removing items from List",
                  path: "/removing-list-items"
                },
                
              ]
            },
            {
              title: "Loops in Programming{T}",
              subtopics: [
                {
                  title: "Understanding Loops in Programming",
                  path: "/intro-loops"
                },
                {
                  title: "Understanding For Loop",
                  path: "/for-loop"
                },
                {
                  title: "Understanding While Loop",
                  path: "/while-loop"
                },
                {
                  title: "Understanding ForEach Loop",
                  path: "/foreach-loop"
                },
               
              ]
            }
          ]
        }
      ]
    }
  ];

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