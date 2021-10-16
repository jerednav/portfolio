import React from 'react';

import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterInside, FooterInsideEmail } from './FooterElements';



const Footer = () => {
// 
  return (
 <FooterContainer id='contact'>
   <FooterWrap>
  <FooterLinksContainer> 
   <FooterLinksWrapper>
      
             <FooterInside>
             Designed and made with love 
             </FooterInside>
             <a
              style={{ textDecoration: 'none', color: '#000' }}
             href='mailto:jerednav@gmail.com'
            >
               <FooterInsideEmail>Jered Nav 2021</FooterInsideEmail>
            </a>
           </FooterLinksWrapper>
          </FooterLinksContainer>
              </FooterWrap>
  </FooterContainer>
  );
          };

export default Footer;