import React from 'react';
import './ProjectModal.css';
import Carousel from '../Carousel/Carousel';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;


  function getResourceObjects() {
    
    let result = [];
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

    return result;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <Carousel items={getResourceObjects()} project={project} />
        {/* <img src={process.env.PUBLIC_URL + project.type.charAt(0).toUpperCase() + project.type.slice(1) + "/" + project.title + "/" +project.img1} alt={`${project.title} Project`} className="modal-image" /> */}
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

      </div>
    </div>
  );
};

export default ProjectModal;
