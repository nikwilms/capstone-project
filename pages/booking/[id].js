import { useRouter } from 'next/dist/client/router';
import React from 'react';

import TableInfo from '../../components/booking/TableInfo';

//import JSON with room and desk information

import Content from '../../components/Content';
// export const getStaticPaths = async () => {};
// export const getStaticProps = async () => {};

//find same ID compared with router.query.id

const Details = () => {
  const router = useRouter();

  return (
    <Content title={router.query.id} hasFooter={false}>
      <TableInfo isBooked={isBooked} getTime={time} getDay={date} />
    </Content>
  );
};

export default Details;
