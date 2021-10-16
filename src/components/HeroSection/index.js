import React from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroContent2,  HeroP, HeroH1 } from './HeroSectionElements'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm <span style={{ color: '#DDBDB7' }}>Jered</span></HeroH1>
                <HeroP>Welcome to my cozy space. I develop websites and apps. Feel free to check out my work below.</HeroP>
            </HeroContent>
            <HeroContent2>
                <HeroH1>Hi</HeroH1>
                
             </HeroContent2> 

        </HeroContainer>
    )
}

export default HeroSection;
