import { useRouter } from 'next/dist/client/router';
import React from 'react';

//import JSON

import Content from '../../components/Content';
// export const getStaticPaths = async () => {};
// export const getStaticProps = async () => {};

//find same ID compared with router.query.id

const Details = () => {
  const router = useRouter();

  return (
    <Content title={router.query.id} seeFooter={false}>
      <h1>Details page</h1>
    </Content>
  );
};

export default Details;
