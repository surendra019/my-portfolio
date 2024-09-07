import React, { useState } from 'react'
import styles from './Work.module.css'
import ProjectTabContainer from '../ProjectTabContainer/ProjectTabContainer'
import { useEffect } from 'react';

export default function Work() {
  const [data, setData] = useState(null);
 
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
