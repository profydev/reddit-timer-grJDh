import React from 'react';
import styled from 'styled-components';

const NavLink = ({ text, href }) => {
  const TextLink = styled.a`
    color: #636363;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <TextLink href={href}>
      {text}
    </TextLink>
  );
};

export default NavLink;
