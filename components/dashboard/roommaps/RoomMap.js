import React, { useEffect, useState } from 'react';
import Seat from './Seat';
import styled from 'styled-components';
import Link from 'next/dist/client/link';
import BookableTypeSelector from '../BookableTypeSelector';

const RoomMap = ({ bookableObjects }) => {
  const [filteredBookableObjects, setFilteredBookableObjects] = useState(
    bookableObjects
  );

  const filterByRoom = () => {
    // filteredBookableObjects.filter()
    setFilteredBookableObjects(
      bookableObjects.filter((object) => object.type === 'room')
    );
  };

  const filterByDesksFloor1 = () => {
    // filteredBookableObjects.filter()
    setFilteredBookableObjects(
      bookableObjects.filter(
        (object) => object.type === 'desk' && object.floor === 1
      )
    );
  };

  const filterByDesksFloor2 = () => {
    // filteredBookableObjects.filter()
    setFilteredBookableObjects(
      bookableObjects.filter(
        (object) => object.type === 'desk' && object.floor === 2
      )
    );
  };

  return (
    <>
      <BookableTypeSelector
        filterByRoom={filterByRoom}
        filterByDesksFloor1={filterByDesksFloor1}
        filterByDesksFloor2={filterByDesksFloor2}
      />
      <Wrapper>
        {filteredBookableObjects.map((name) => {
          return (
            //takes the structure from /pages/booking/
            <Link key={name.id} href={'/booking/' + name.name}>
              <a>
                <Seat name={name.name} />
              </a>
            </Link>
          );
        })}
      </Wrapper>
    </>
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
