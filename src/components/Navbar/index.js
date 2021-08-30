import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements'


const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    mindful.
                </NavLogo>
            </NavbarContainer>
        </Nav>

        </>
    )
}

export default Navbar;
