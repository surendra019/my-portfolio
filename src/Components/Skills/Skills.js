import React, { useState } from 'react';
import './Skills.css';

const skillsData = [
  {
    name: 'JavaScript',
    rating: 90,
    projects: ['Project A', 'Project B', 'Project C'],
  },
  {
    name: 'React',
    rating: 85,
    projects: ['Project D', 'Project E'],
  },
  {
    name: 'Node.js',
    rating: 80,
    projects: ['Project F', 'Project G', 'Project H'],
  },
  // Add more skills here
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="skills-wrapper">
      <div className="skills-container">
        <h2>My Skills</h2>
        <ul className="skills-list">
          {skillsData.map((skill, index) => (
            <li
              key={index}
              className="skill-item"
              onMouseEnter={() => setSelectedSkill(skill)}
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="skill-details">
        {selectedSkill && (
          <>
            <h3>{selectedSkill.name}</h3>
            <div className="circular-progress-bar">
              <svg viewBox="0 0 36 36">
                <path
                  className="circle-bg"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={`${selectedSkill.rating}, 100`}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  {`${selectedSkill.rating}%`}
                </text>
              </svg>
            </div>
            <h4>Projects</h4>
            <ul className="projects-list">
              {selectedSkill.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
