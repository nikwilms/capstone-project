import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';

import TableInfo from '../../components/booking/TableInfo';

import Content from '../../components/Content';
import {
  getBookableObjects,
  getBookableObjectByName,
} from '../../utils/getTableDesk';

//find same ID compared with router.query.id

// useEffect vs serverSide ... faster rendering

const Details = ({ data }) => {
  return (
    <Content title={data.name} hasFooter={false}>
      <TableInfo bookingInfo={data.booking} />
    </Content>
  );
};

//staticProps instead of ServerSideProps, because tables/rooms are not changing a lot
export async function getStaticProps({ params }) {
  const res = await getBookableObjectByName(params.name);

  const getTableOrDesk = await JSON.parse(JSON.stringify(res));
  return {
    props: { data: getTableOrDesk },
  };
}

export async function getStaticPaths() {
  const res = await getBookableObjects();
  console.log(res);

  const paths = res.map((deskOrRoom) => {
    return { params: { name: deskOrRoom.name } };
  });
  return {
    paths,
    fallback: false,
  };
}

export default Details;
