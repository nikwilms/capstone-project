import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookableTypeSelector from '../BookableTypeSelector';
import ClusterOne from './ClusterOne';
import ClusterTwo from './ClusterTwo';
import Rooms from './Rooms';

const RoomMap = ({ bookableObjects }) => {
  //console.log('ROOMMAP', bookableObjects);

  const [filter, setFilter] = useState('cluster1');

  return (
    <>
      <BookableTypeSelector setFilter={setFilter} />
      <Wrapper>
        {filter === 'cluster1' ? (
          <ClusterOne bookableObjects={bookableObjects} />
        ) : null}
        {filter === 'cluster2' ? (
          <ClusterTwo bookableObjects={bookableObjects} />
        ) : null}
        {filter === 'rooms' ? <Rooms /> : null}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default RoomMap;
