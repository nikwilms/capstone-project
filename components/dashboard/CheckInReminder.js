import React from 'react';

const CheckInReminder = ({ isChecked }) => {
  return <h2>{isChecked ? 'You are checked in' : 'PLEASE CHECK IN'}</h2>;
};

export default CheckInReminder;
