import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Content = ({ hasFooter, title, children }) => {
  return (
    <>
      <Header>{title}</Header>
      <StyledMain hasFooter={hasFooter}>{children}</StyledMain>
      {hasFooter ? <Footer /> : null}
    </>
  );
};

const StyledMain = styled.main`
  position: absolute;
  top: 5rem;
  bottom: ${(props) => (props.hasFooter ? '5rem' : 0)};
  width: 100vw;
  margin: 1vw 0;
  padding: 0 1vw;
`;

export default Content;
