import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: #636363;
  text-decoration: none;
  line-height: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

// eslint-disable-next-line arrow-body-style
const TextLink = ({ className, text, href }) => {
  return (
    <StyledLink href={href} className={className}>
      {text}
    </StyledLink>
  );
};

export default TextLink;
