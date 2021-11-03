import React from 'react';
import Link from 'next/dist/client/link';
import styled from 'styled-components';

const Footer = ({ isVisible }) => {
  return (
    <StyledNav>
      <Link href='/dashboard'>
        <a>Dashboard</a>
      </Link>
      <Link href='/bookings'>
        <a>Bookings</a>
      </Link>
      <Link href='/onSite'>
        <a>OnSite</a>
      </Link>
    </StyledNav>
  );
};

const StyledNav = styled.ul`
  position: fixed;
  width: 100vw;
  bottom: 0;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
  padding: 0;
  margin: 0;
`;

export default Footer;
