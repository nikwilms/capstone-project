import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import List from '../List';

const RoomOrDesk = () => {
  return (
    <StyledSection>
      <Button buttonType='button' name='Room' />
      <Button buttonType='button' name='Desk' />
      <div>
        <List optionValue={['floor 1', 'floor 2']} />
      </div>
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
