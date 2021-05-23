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

         fetch('https://api-pranavdhar.herokuapp.com/graphql', sendingPost)
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
                    image={"https://api-pranavdhar.herokuapp.com/media/"+project.image}
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