import React from 'react';

const Reminder = ({ isChecked }) => {
  return <h2>{isChecked ? 'You are checked in' : 'PLEASE CHECK IN'}</h2>;
};

export default Reminder;
