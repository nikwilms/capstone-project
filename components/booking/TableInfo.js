import React from 'react';
import styled from 'styled-components';

const TableInfo = () => {
  return (
    <StyledSection>
      <h2>This desk has no bookings</h2>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: center;
`;

export default TableInfo;
