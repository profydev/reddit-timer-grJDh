import React from 'react';
import styled from 'styled-components';

import TextLink from '../../components/TextLink/TextLink';

import logo from './logo.png';

const HeaderWrapper = styled.header`
  height: 100px;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  width: 259px;
  height: 17px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 150px;
  height: 36px;
`;

// eslint-disable-next-line arrow-body-style
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo
        src={logo}
        alt="Reddit Timer Logo"
      />

      <Nav>
        <TextLink text="Search" href="#" />
        <TextLink text="How it works" href="#" />
        <TextLink text="About" href="#" />
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
