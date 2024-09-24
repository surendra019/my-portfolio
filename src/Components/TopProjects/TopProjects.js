// TopProjects.js
import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';

const TopProjects = () => {
    const [data, setData] = useState(null);
    const [project, setProject] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setProject(project)
        console.log("dlfaj")
        setIsModalOpen(true)
        
    };
    const closeModal = () => setIsModalOpen(false);


    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((jsonData) => {
                let arr = []
                for (let i of jsonData) {
                    if ("top" in i) {
                        arr.push(i);
                    }
                }
                setData([arr[0], arr[1], arr[2]]);
            })
            .catch((error) => console.error('Error loading JSON:', error));


    }, [])

    return (
        <>
        <div className="top-projects">
            <h2>Top Projects</h2>
            <div className="projects-gridt">


                {data && data.map((project) => {
                    return (
                        <div className="project-card" key={project.title} onClick={()=> openModal(project)}>
                            <img src={process.env.PUBLIC_URL + project.type.charAt(0).toUpperCase() + project.type.slice(1) + "/" + project.title + "/" + project.images[1]} alt={project.title} className="project-image" />
                            <div className="project-contentt">
                                <h3>{project.title}</h3>
                                <p style={{padding: "0px 5px"}}>{project.description.substr(0, 100) + "..."}</p>
                     
                        
                            </div>
                        </div>
                    )
                })}
            </div>
           
        </div>
         <ProjectModal
         isOpen={isModalOpen}
         onClose={closeModal}
         project={project}
     />
     </>
    );
};

export default TopProjects;
