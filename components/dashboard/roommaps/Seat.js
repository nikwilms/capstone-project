import React from 'react';
import styled from 'styled-components';

const Seat = ({ name }) => {
  return <StyledButton type='button'>{name}</StyledButton>;
};

const StyledButton = styled.button`
  border-radius: 8px;
`;

export default Seat;
