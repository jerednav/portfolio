import React from 'react'
import Icon1 from '../../images/mindful.png'
import Icon2 from '../../images/boomshark.png'

import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP, ProjectsP2 } from './ProjectsElements'


const Projects = () => {
    return (
        <>
         <ProjectsContainer id='projects'>
             <ProjectsH1> Projects</ProjectsH1>
             <ProjectsWrapper>
                 <ProjectsCard>
                     <a target='_blank'
                     rel='noreferrer'
                     href='https://mindfulnotesapp.herokuapp.com/'>
                     <ProjectsIcon src={Icon1}/>
                     </a>
                     <ProjectsH2>mindful notes</ProjectsH2>
                     <ProjectsP>Full-stack CRUD web app created for note taking</ProjectsP>
                     <ProjectsP2> 
                        
                    <a href="https://github.com/jerednav/mindfulnotes">
                     <button>Github Repo</button>
                    </a>

                     </ProjectsP2>
                 </ProjectsCard>
                 <ProjectsCard> <a target='_blank'
                     rel='noreferrer'
                     href='https://boomsharksocial.herokuapp.com/'>
                     <ProjectsIcon src={Icon2}/>
                     </a>
                     <ProjectsH2>Boomshark</ProjectsH2>

                     <ProjectsP>Full stack IG clone CRUD web app with log-in.           
                         </ProjectsP>
                        <ProjectsP2> 
                        <a href="https://github.com/jerednav/boomshark">
                     <button>Github Repo</button>
                    </a>

                     </ProjectsP2>
                 </ProjectsCard>
                 <ProjectsCard> 
                     {/* <ProjectsIcon src={Icon3}/> */}
                     <ProjectsH2>mindful</ProjectsH2>
                     <ProjectsP> Full-stack React/Node producitivity app</ProjectsP>
                     <ProjectsP2>
                                    

                     </ProjectsP2>
                  </ProjectsCard>
             </ProjectsWrapper>
             </ProjectsContainer>   
        </>
    )
}

export default Projects
