import React from 'react';
import Button from '../Button';
import styled from 'styled-components';

const BookableTypeSelector = ({ setFilter }) => {
  return (
    <>
      <StyledSection>
        <Button type='button' onClick={() => setFilter('rooms')}>
          Rooms
        </Button>
        <Button type='button' onClick={() => setFilter('cluster1')}>
          DeskFloor1
        </Button>
        <Button type='button' onClick={() => setFilter('cluster2')}>
          DeskFloor2
        </Button>
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export default BookableTypeSelector;
