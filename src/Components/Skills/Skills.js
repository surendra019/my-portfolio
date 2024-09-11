import React, { useState } from 'react';
import './Skills.css';
import { useEffect } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';



const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [skillsData, setSkillsData] = useState(null);
  const [data, setData] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    // setSelectedTitle(title)
    setIsModalOpen(true)};
  const closeModal = () => setIsModalOpen(false);

 
  useEffect(() => {
    setSkillsData(["React", "Javascript", "HTML", "CSS", "Nodejs", "Pixijs", "Godot", "GDscript", "Java"])
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) =>  {
        setData(jsonData)
      })
        .catch((error) => console.error('Error loading JSON:', error));
      
        
  }, [])

  function getProjects(skill){
    
    return data.filter(item => item.tags.includes(skill))
  }
  
  function getProject(name){
    if(data)
    return data.filter(item => item.title === name)[0]
  }

  return (
    <div className="skills-wrapper">
      <div className="skills-container">
        <h2>My Skills</h2>
        <ul className="skills-list">
          {skillsData && 
          skillsData.map((skill, index) => (
            <li
              key={index}
              className="skill-item"
              onMouseEnter={() => setSelectedSkill(skill)}
            >
              {skill}
            </li>
          ))} 
        </ul>
      </div>
      <div className="skill-details">
        {selectedSkill && (
          <>
            <h3>{selectedSkill}</h3>
            <h4>Projects</h4>
            <ul className="projects-list">
              
              {(getProjects(selectedSkill)) && (getProjects(selectedSkill).length !== 0) ?
              getProjects(selectedSkill).map((project, index) => (
                <li key={index} onClick={() =>{ setSelectedTitle(project.title); openModal()}}>{project.title} </li>
              )) : <div></div>}
            </ul>
          </>
        )}
      </div>
    
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={getProject(selectedTitle)}
      />
    </div>
  );
};

export default Skills;
