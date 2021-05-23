import {React, useState,  useEffect} from 'react'
import ProjectCard from './ProjectCard';
import './Projects.css'

function Projects() {
    const query = `query{
        allProjects{
          id
          image
          projectDescription
          codeLink
          demoLink
        }
      }`
    
    const [projects,setProjects] = useState([])

      useEffect(() => {
        const sendingPost = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({query}),
        };

         fetch('http://127.0.0.1:8000/graphql', sendingPost)
            .then(response => response.json())
            .then(data => setProjects(data.data.allProjects));
    },[query])

    return (
    <div className='projects' id='projects'>
        <p>Projects</p>
        <div className='projects-container'>
        {projects.map((project) =>
                <ProjectCard
                    key={project.id}
                    image={"http://127.0.0.1:8000/media/"+project.image}
                    description={project.projectDescription}
                    codelink={project.codeLink}
                    demolink={project.demoLink}
                />
            )}
        </div>
        </div>
    )
}

export default Projects