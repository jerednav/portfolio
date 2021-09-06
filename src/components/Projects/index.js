import React from 'react'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements'


const Projects = () => {
    return (
        <>
         <ProjectsContainer id='projects'>
             <ProjectsH1> Projects</ProjectsH1>
             <ProjectsWrapper>
                 <ProjectsCard>
                     {/* <ProjectsIcon src={Icon1}/> */}
                     <ProjectsH2>mindful</ProjectsH2>
                     <ProjectsP> minimal to-do app</ProjectsP>
                 </ProjectsCard>
                 <ProjectsCard>
                     {/* <ProjectsIcon src={Icon2}/> */}
                     <ProjectsH2>Boomshark</ProjectsH2>
                     <ProjectsP> IG clone</ProjectsP>
                 </ProjectsCard>
                 <ProjectsCard>
                     {/* <ProjectsIcon src={Icon3}/> */}
                     <ProjectsH2>Calculator</ProjectsH2>
                     <ProjectsP> Projects I've worked on so far.</ProjectsP>
                 </ProjectsCard>
             </ProjectsWrapper>
             </ProjectsContainer>   
        </>
    )
}

export default Projects
