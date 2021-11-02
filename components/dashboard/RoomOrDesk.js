import React from 'react';
import Button from '../Button';
import List from '../List';
import styled from 'styled-components';

const RoomOrDesk = () => {
  return (
    <>
      <StyledSection>
        <Button buttonType='button' name='Room' />
        <Button buttonType='button' name='Desk' />
      </StyledSection>
      <List optionValue={['floor 1', 'floor 2']} />
    </>
  );
};

const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export default RoomOrDesk;
