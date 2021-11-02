import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Content = ({ isVisible, title, children }) => {
  return (
    <>
      <Header title={title} />
      <StyledMain>{children}</StyledMain>
      <Footer isVisible={isVisible} />
    </>
  );
};

const StyledMain = styled.main`
  margin-top: 5rem;
`;

export default Content;
