import React from 'react';
import styled from 'styled-components';
import Welcome from '../components/dashboard/Welcome';
import Reminder from '../components/dashboard/Reminder';
import RoomOrDesk from '../components/dashboard/RoomOrDesk';
import Footer from '../components/Footer';
import RoomRen from '../components/dashboard/roommaps/RoomRen';
import Content from '../components/Content';

const Dashboard = () => {
  //put is later on in a JSON and fetch the data
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
      <Content title={'Welcome Jan'}>
        {/* later on, isChecked gets input from DB */}
        <Reminder isChecked={false} />
        <FlexWrapper>
          <RoomOrDesk />
          <RoomRen selected={deskFloorOne} />
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
