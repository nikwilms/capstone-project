import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import 'react-datepicker/dist/react-datepicker.css';

import Button from '../Button';
import { useRouter } from 'next/router';

const DayTime = ({ bookableObject }) => {
  const router = useRouter();

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );

  const [endDate, setEndDate] = useState(
    setHours(setMinutes(new Date(), 0), 13)
  );

  //later use for response state
  const [bookingError, setBookingError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState('');

  const submitBooking = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/booking/bookingProcess', {
      method: 'POST',
      body: JSON.stringify({ bookableObject, startDate, endDate }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (response.ok) {
      //console.log('OK', response);
      router.push('/bookingsOverview/');
    }
    //booking not successful, ?? catch all message
    else {
      //console.log('NOT OK', response);
      setBookingError(data.error ?? 'Something went wrong, please try again');
    }
  };

  return (
    <StyledForm onSubmit={submitBooking}>
      <span>FROM</span>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        showTimeSelect
        includeTimes={[
          setHours(setMinutes(new Date(), 0), 9),
          setHours(setMinutes(new Date(), 0), 13),
        ]}
        dateFormat='MMMM d, yyyy h:mm aa'
      />
      <span>TO</span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        minDate={startDate}
        maxDate={startDate}
        showTimeSelect
        includeTimes={[
          setHours(setMinutes(new Date(), 0), 13),
          setHours(setMinutes(new Date(), 0), 17),
        ]}
        dateFormat='MMMM d, yyyy h:mm aa'
      />

      <Button type='submit'>Confirm Booking</Button>
      <div>{bookingError}</div>
      <div>{bookingSuccess}</div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  border: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //align-items: center;
  height: 12rem;
`;

export default DayTime;
