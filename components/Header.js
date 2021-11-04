import React from 'react';
import styled from 'styled-components';

const Header = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>;
};

const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  top: 0;
  height: 4rem;
  text-align: center;
  border-bottom: 1px solid black;
  padding: 1rem;
  margin: 0;
`;

export default Header;
