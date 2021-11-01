import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const RoomOrDesk = () => {
  return (
    <StyledSection>
      <Button buttonType='button' name='Room' />
      <Button buttonType='button' name='Desk' />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default RoomOrDesk;
