import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavIcon } from './NavbarElements'
import Icon2 from '../../images/profile.png'



const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
              
                <NavIcon to src={Icon2}/>
         
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
                
            </NavbarContainer>
        </Nav>

        </>
    )
}

export default Navbar;
