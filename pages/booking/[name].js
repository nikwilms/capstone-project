import React, { useEffect } from 'react';
import DayTime from '../../components/booking/DayTime';
import TableInfo from '../../components/booking/TableInfo';
import Content from '../../components/Content';
import {
  getBookableObjects,
  getBookableObjectByName,
} from '../../utils/getTableDesk';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Booking = ({ data }) => {
  const router = useRouter();

  return (
    <Content title={data.name} hasFooter={true}>
      <ul>
        <TableInfo bookableObjectName={router.query.name} />
      </ul>
      <DayTime bookableObject={router.query.name} />
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

  const paths = res
    .filter(({ name }) => name)
    .map(({ name }) => {
      console.log(res);
      return { params: { name: name } };
    });
  return {
    paths,
    fallback: false,
  };
}

export default Booking;
