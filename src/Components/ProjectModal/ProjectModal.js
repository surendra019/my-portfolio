import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, image, title, description, technologies, link }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={image} alt={`${title} Project`} className="modal-image" />
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <div className="modal-tags">
          {/* {technologies.map((tech, index) => (
            <span key={index} className={`tag ${tech.toLowerCase()}`}>
              {tech}
            </span>
          ))} */}
        </div>
        {link && <a href={link} target="_blank" rel="noopener noreferrer" className="modal-link">View Project</a>}
      </div>
    </div>
  );
};

export default ProjectModal;
