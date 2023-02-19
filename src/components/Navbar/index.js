import React from 'react';
import {Nav,
        NavLink, 
        Bars, 
        NavMenu,
        NavBtn, 
        NavBtnLink} 
        from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('/Users/sonabriskarova/Desktop/my-app/src/images/ETPO.png')} alt='ETPO' />
        </NavLink>
        <Bars />
        <NavMenu>
          {/* <NavLink to='/contact-us' activeStyle>
            Úvod
          </NavLink> */}
        </NavMenu>
        <NavBtn>
        </NavBtn>
      </Nav>
    </>
  );
};


export default Navbar;