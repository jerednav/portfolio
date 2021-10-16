import React from 'react';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
} from './InfoElements';


import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  heading,
  darkText,
  description,
  buttonLabel,
  image,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow >
            <Column1>
              <TextWrapper>
                <TopLine></TopLine>
                <Subtitle>
                  <p>
                    Hi, my name is
                  </p>
                </Subtitle>
                <Heading>
                  Jered Nav
                </Heading>
                
                <Subtitle>
                  <p>
                   Software Engineer in Los Angeles, CA
                  </p>
                </Subtitle>
               
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
              <Subtitle>
              <SocialMedia>
                    <SocialMediaWrap>
              
            <SocialIcons>
              <SocialIconLink
                style={{ color: '#000' }}
                href='//www.github.com/jerednav'
                target='_blank'
                aria-label='Github'
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                style={{ color: '#000' }}
                href='//www.twitter.com/jerednav'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='//www.linkedin.com/in/jerednav/'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
                </Subtitle>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;