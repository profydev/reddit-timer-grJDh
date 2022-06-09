import React from 'react';
import styled from 'styled-components';

import NavLink from '../../components/NavLink/NavLink';

import logo from './logo.png';

// eslint-disable-next-line arrow-body-style
const Header = () => {
  const HeaderWrapper = styled.header`
    margin: 1em;
  `;

  const Nav = styled.nav`
    margin: 1em;
  `;

  const Logo = styled.img`
    margin: 1em;
  `;

  return (
    <HeaderWrapper>
      <Logo
        src={logo}
        alt="Reddit Timer Logo"
      />

      <Nav>
        <NavLink text="Search" href="#" />
        <NavLink text="How it works" href="#" />
        <NavLink text="About" href="#" />
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
