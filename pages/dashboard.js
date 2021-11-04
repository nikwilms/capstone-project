import React from 'react';
import styled from 'styled-components';
import CheckInReminder from '../components/dashboard/CheckInReminder';
import BookableTypeSelector from '../components/dashboard/BookableTypeSelector';
import RoomMap from '../components/dashboard/roommaps/RoomMap';
import Content from '../components/Content';

const Dashboard = () => {
  //put is later on in a JSON and fetch the data
  //for each floor, choose desk or room
  const deskFloorOne = [
    { desk: '01', isBooked: false },
    { desk: '02', isBooked: false },
    { desk: '03', isBooked: true },
    { desk: '04', isBooked: true },
    { desk: '05', isBooked: false },
    { desk: '06', isBooked: false },
    { desk: '07', isBooked: true },
    { desk: '08', isBooked: true },
  ];

  return (
    <>
      {/* later on, userName gets input from DB */}
      <Content title={'Welcome Jan'} hasFooter={true}>
        {/* later on, isChecked gets input from DB */}
        <CheckInReminder isChecked={false} />
        <FlexWrapper>
          <BookableTypeSelector />
          <RoomMap deskFloorOne={deskFloorOne} />
        </FlexWrapper>
      </Content>
    </>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export default Dashboard;
