import React from 'react';
import Welcome from '../components/dashboard/Welcome';
import Reminder from '../components/dashboard/Reminder';
import RoomOrDesk from '../components/dashboard/RoomOrDesk';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
      {/* later on, userName gets input from DB */}
      <Welcome greeting='Welcome' userName='Jan' />
      {/* later on, isChecked gets input from DB */}
      <Reminder isChecked={false} />
      <RoomOrDesk option={['Room', 'Desk']} />
      <Footer nav={['Dashboard', 'Bookings', 'On-Site']} />
    </>
  );
};

export default Dashboard;
