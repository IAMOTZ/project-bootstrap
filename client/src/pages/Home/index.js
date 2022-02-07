import React from 'react';
import { useData, useRealTimeData } from '../../hooks';
import { Typography } from '@mui/material';
import Layout from '../../components/Layout';

const Home = () => {
  const { isLoading, data } = useRealTimeData();

  return (
    <Layout contentLoading={isLoading} wrapContent>
      <div>
        <Typography className='pageTitle' variant="h4">Devices</Typography>
        {
          data && <Typography variant="h3">Data is fetched! {data}</Typography>
        }
      </div>
    </Layout>
  )
}

export default Home;