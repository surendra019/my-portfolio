import React, { useState } from 'react'
import styles from './Work.module.css'
import ProjectTabContainer from '../ProjectTabContainer/ProjectTabContainer'
import { useEffect } from 'react';

export default function Work() {
  const [data, setData] = useState(null);
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A portfolio website built with React.',
      imageUrl: 'https://via.placeholder.com/300x180',
      projectLink: 'https://example.com/portfolio',
      category: 'Web Development'
    },
    {
      title: 'Platformer Game',
      description: 'A platformer game developed in Unity.',
      imageUrl: 'https://via.placeholder.com/300x180',
      projectLink: 'https://example.com/game',
      category: 'Game Development'
    },
    {
      title: 'Delivery App',
      description: 'An Android app for short-distance deliveries.',
      imageUrl: 'https://via.placeholder.com/300x180',
      projectLink: 'https://example.com/delivery-app',
      category: 'Android Development'
    },

    
    // Add more projects as needed
  ];
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) =>  {
        setData(jsonData)
      })
        .catch((error) => console.error('Error loading JSON:', error));
      
        
  }, [])

  return (
    <div className={styles.main_container}>
      <ProjectTabContainer projects={data} />
    </div>
  )
}
