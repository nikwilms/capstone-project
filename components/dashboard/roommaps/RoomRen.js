import React from 'react';
import Seat from './Seat';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

const RoomRen = ({ selected }) => {
  return (
    <Wrapper>
      {selected.map((selections) => {
        return (
          <>
            <Link href={'/booking/' + selections.desk}>
              <a>
                <Seat name={selections.desk} key={selections.desk} />
              </a>
            </Link>
          </>
        );
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

export default RoomRen;
