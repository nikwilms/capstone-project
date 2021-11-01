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
      <Reminder isChecked={true} />
      <RoomOrDesk option1='Room' option2='Desk' />
      <Footer nav1='Dashboard' nav2='Bookings' nav3='On-Site' />
    </>
  );
};

export default Dashboard;
