import React from 'react';
import styled from 'styled-components';

const TableInfo = ({ bookingInfos }) => {
  return (
    <StyledSection>
      <h2>This desk has no bookings</h2>
    </StyledSection>
  );
};

// export async function getStaticProps() {
//   const res = await getBookableObjects();
//   console.log(res);
//   const getTableOrDesk = await JSON.parse(JSON.stringify(res));

//   return {
//     props: { data: getTableOrDesk },
//   };
// }

const StyledSection = styled.section`
  text-align: center;
`;

export default TableInfo;
