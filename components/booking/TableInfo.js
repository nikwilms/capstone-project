import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { useState, useEffect } from 'react';

dayjs.extend(LocalizedFormat);

const TableInfo = ({ bookableObjectName }) => {
  const [bookingTime, setBookingTime] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`/api/bookingInfo/${bookableObjectName}`);
        const data = await response.json();
        setBookingTime(data);
        //console.log(data);
      } catch (error) {
        //console.log('error', error);
      }
    };

    fetchBookings();
  }, [bookableObjectName]);

  return (
    <StyledSection>
      <h3>Current Bookings: </h3>
      {bookingTime.length
        ? bookingTime.map((object) => {
            return object.booking.map((date) => {
              return (
                <StyledList key={date._id} style>
                  {dayjs(date.startDate).format('ll')}: From{' '}
                  {dayjs(date.startDate).format('LT')} to{' '}
                  {dayjs(date.endDate).format('LT')}
                </StyledList>
              );
            });
          })
        : 'there are no bookings'}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: center;
`;

const StyledList = styled.li`
  list-style: none;
  border: 2px solid;
  background-color: #80bfff;
`;

export default TableInfo;
