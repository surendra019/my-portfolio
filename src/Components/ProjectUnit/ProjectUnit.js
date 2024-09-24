import React from 'react'
import './ProjectUnit.css'
import ProjectModal from '../ProjectModal/ProjectModal';
import { useState } from 'react';

function ProjectUnit({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="project-card" onClick={openModal}>
        <img src={process.env.PUBLIC_URL + project.type.charAt(0).toUpperCase() + project.type.slice(1) + "/" + project.title + "/" + project.images[1]} alt={`Project`} className="project-image" />
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description.substr(0, 80) + "..."}</p>
          <div className="project-tags">
            {
              project.tags.map(tag => {
                return <span key={tag} className={`tag `}>
                  {tag}
                </span>
              })
            }

          </div>
          <div className='project-status'>Status: <span className={project.status === 'complete'? 'project-status-span-complete': 'project-status-span-incomplete'}>{project.status}</span></div>
        </div>

      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={project}
      />
    </>

  )
}

export default ProjectUnit
