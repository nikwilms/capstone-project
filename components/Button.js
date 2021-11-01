import React from 'react';
import styled from 'styled-components';

const Button = ({ name, buttonType }) => {
  return <StyledButton type={buttonType}>{name}</StyledButton>;
};

const StyledButton = styled.button`
  all: unset;
  background: #72cf97;
  color: white;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  text-align: center;
`;

export default Button;
