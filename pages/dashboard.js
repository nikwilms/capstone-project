import React from 'react';
import styled from 'styled-components';
import CheckInReminder from '../components/dashboard/CheckInReminder';

import RoomMap from '../components/dashboard/roommaps/RoomMap';
import Content from '../components/Content';
import { getBookableObjects } from '../utils/getTableDesk';

const Dashboard = (props) => {
  const { bookableObjects } = props;
  return (
    <>
      {/* later on, userName gets input from DB */}
      <Content title={'Welcome Jan'} hasFooter={true}>
        {/* later on, isChecked gets input from DB */}
        <CheckInReminder isChecked={false} />
        <FlexWrapper>
          <RoomMap bookableObjects={bookableObjects} />
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

export async function getStaticProps() {
  const res = await getBookableObjects();
  console.log(res);
  const bookableObjects = await JSON.parse(JSON.stringify(res));

  return {
    props: { bookableObjects },
  };
}

export default Dashboard;
