import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterInside,
  FooterInsideEmail,
} from './FooterElements';
import logo from '../../images/profile.png';

const Footer = () => {
  const backToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id='contact'>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <h1>Contact</h1>
            <FooterInside>
              Please contact me at: 
            </FooterInside>
            <a
              style={{ textDecoration: 'none', color: '#000' }}
              href='mailto:jerednav@gmail.com'
            >
              <FooterInsideEmail>jerednav@gmail.com</FooterInsideEmail>
            </a>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={backToTop}>
              <img src={logo} alt='' style={{ width: '160px' }} />
            </SocialLogo>
            <WebsiteRights>
              {' '}
              Jered Nav &copy; {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                style={{ color: '#DDBDB7' }}
                href='//www.github.com/jerednav'
                target='_blank'
                aria-label='Github'
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                style={{ color: '#DDBDB7' }}
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
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;