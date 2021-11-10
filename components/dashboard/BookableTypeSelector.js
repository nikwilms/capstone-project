import React from 'react';
import Button from '../Button';
import styled from 'styled-components';

const BookableTypeSelector = ({
  filterByRoom,
  filterByDesksFloor1,
  filterByDesksFloor2,
}) => {
  return (
    <>
      <StyledSection>
        <Button type='button' onClick={filterByRoom}>
          Rooms
        </Button>
        <Button type='button' onClick={filterByDesksFloor1}>
          DeskFloor1
        </Button>
        <Button type='button' onClick={filterByDesksFloor2}>
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
