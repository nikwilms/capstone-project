import React from 'react';
import Seat from './Seat';
import styled from 'styled-components';

const RoomMap = ({ selected }) => {
  return (
    <Wrapper>
      {selected.map((selections) => {
        return <Seat name={selections.desk} key={selections.desk} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(3, 50px);
  column-gap: 0.5rem;
  row-gap: 0.5rem;
`;

export default RoomMap;
