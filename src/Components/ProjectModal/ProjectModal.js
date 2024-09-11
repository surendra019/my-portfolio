import React from 'react';
import './ProjectModal.css';
import Carousel from '../Carousel/Carousel';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;


  function getResourceObjects() {
    let result = [];
  console.log(project)
    if(project){
      
      project.images.forEach(element => {
        let obj = {};
        obj.src = element
        obj.type = 'image'
        result.push(obj)
      });
  
      project.videos.forEach(element => {
        let obj = {};
        obj.src = element
        obj.type = 'video'
        result.push(obj)
      })
  
      
    }
    return result;
   
  }

  return (
    <> project ? 
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <Carousel items={getResourceObjects()} project={project} />
     
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>
        <div className="modal-tags">
          {
            project.tags.map(tag => {
              return <span key={tag} className={`tag `}>
                {tag}
              </span>
            })
          }
        </div>
        {project.github &&
          <a href={project.github} className="github-button" target="_blank">
        <i className="fab fa-github"></i> Visit GitHub Project
    </a>
        }
        {
          project.visit &&
          <a href={project.visit}>Visit</a>
        }
        
      </div>
    </div>
    : <div></div>
    </>
    
  );
};

export default ProjectModal;
