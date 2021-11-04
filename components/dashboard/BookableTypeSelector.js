import React from 'react';
import Button from '../Button';
import FloorList from '../FloorList';
import styled from 'styled-components';

const BookableTypeSelector = () => {
  return (
    <>
      <StyledSection>
        <Button type='button'>Room</Button>
        <Button type='button'>Desk</Button>
      </StyledSection>
      <FloorList optionValues={['floor 1', 'floor 2']} />
    </>
  );
};

const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export default BookableTypeSelector;
