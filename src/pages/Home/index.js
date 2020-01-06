import React from 'react';

import Layout from '../../components/interface/Layout';
import ProductsList from './components/ProductsList';
import Banner from './components/Banner';

const Home = () => {
  return (
    <>
      <Layout>
        <Banner />
        <ProductsList />
      </Layout>
    </>
  );
};

export default Home;
