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
                  path: "https://v0-vamsi-training-comps-vpwbjw.vercel.app/"    
                }
              ]
            },
            {
              title: "What Are Variables? {T}",
              subtopics: [
                {
                  title: "Understanding Variables",
                  path: "https://v0-robot-programming-lqt1sbcf28a-lqvx9l.vercel.app/"
                },
                {
                  title: "Reusing of Variables",
                  path: "https://v0-robot-programming-lqt1sbcf28a-lqvx9l.vercel.app/"
                },
                {
                  title: "Changing the Value of Variable",
                  path: "https://v0-robot-programming-lqt1sbcf28a-lqvx9l.vercel.app/"
                },
                {
                  title: "Quick Recap of Variables",
                  path: "https://v0-robot-programming-lqt1sbcf28a-lqvx9l.vercel.app/"
                },
                {
                  title: "Quiz on Variables",
                  path: "https://v0-robot-programming-lqt1sbcf28a-lqvx9l.vercel.app/"
                }
              ]
            },
            {
              title: "Types of Information(Data Types) {T}",
              subtopics: [
                {
                  title: "Introduction to DataTypes",
                  path: "https://v0-vamsi-training-comps-nyocco.vercel.app/"
                },
                {
                  title: "Understanding the Number Data Type",
                  path: "https://v0-vamsi-training-comps-rnuxfx.vercel.app/"
                },
                {
                  title: "The Story of a String",
                  path: "https://v0-vamsi-training-comps-kf4jfi.vercel.app/"
                },
                {
                  title: "Understanding Boolean Data Type",
                  path: "https://v0-vamsi-training-comps-ck5bbm.vercel.app/"
                },
              ]
            },
            {
              title: "Symbols in programming{T}",
              subtopics: [
                {
                  title: "Introduction to Symbols",
                  path: "https://5k7dpnsviirhloeh.vercel.app/"
                },
                {
                  title: "Calculations using Operators",
                  path: "https://v0-vamsi-training-comps-wh4xgo.vercel.app/"
                },
                {
                  title: "Comparisions Using Operators",
                  path: "https://v0-vamsi-training-comps-aqzn7j.vercel.app/"
                },
                {
                  title: "Multiple Comparisons",
                  path: "https://v0-vamsi-training-comps-l8jkwr.vercel.app/"
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
                  path: "https://v0-vamsi-training-comps-sj7rme.vercel.app/"
                },
                {
                  title: "Function Reusability",
                  path: "https://v0-vamsi-training-comps-fkxgqj.vercel.app/"
                },
                {
                  title: "Flexible Functions",
                  path: "https://v0-vamsi-training-comps-z58bp5.vercel.app/"
                },
                
              ]
            },
            {
              title: "Flow of Programs{T}",
              subtopics: [
                {
                  title: "Understand the Control Flow",
                  path: "https://v0-vamsi-training-comps-owfw3e.vercel.app/"
                },
                {
                  title: "Understanding Conditionals",
                  path: "https://v0-vamsi-training-comps-xiseoc.vercel.app/"
                },
                {
                  title: "Understanding Loops",
                  path: "https://p0ha8tua1xsb03m3.vercel.app/"
                },
                {
                  title: "Handling Exceptions",
                  path: "https://v0-vamsi-training-comps-mcalia.vercel.app/"
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
                  path: "https://v4bnsdqbp01scqlq.vercel.app/"
                },
                {
                  title: "Accessing Items to List",
                  path: "https://qotioao3xiwldd5f.vercel.app/"
                },
                {
                  title: "Adding Items to List",
                  path: "https://2mdi33nid4owkafg.vercel.app/"
                },
                {
                  title: "Removing items from List",
                  path: "https://v0-vamsi-training-comps-ykazaw.vercel.app/"
                },
                
              ]
            },
            {
              title: "Loops in Programming{T}",
              subtopics: [
                {
                  title: "Understanding Loops in Programming",
                  path: "https://v0-vamsi-training-comps-nu7of0.vercel.app/"
                },
                {
                  title: "Understanding For Loop",
                  path: "https://v0-vamsi-training-comps-bnwd5o.vercel.app/"
                },
                {
                  title: "Understanding While Loop",
                  path: "https://p0ha8tua1xsb03m3.vercel.app/"
                },
                {
                  title: "Understanding ForEach Loop",
                  path: "https://abgodkue6fl29cu9.vercel.app/"
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