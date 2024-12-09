import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import Banner from './Banner';
import { Box } from '@mui/material';
import OurClients from './OurClients';
import Membership from './Membership';
import Feature from './Feature';
import Clubs from './Clubs';
import Panna from './Panna';
import Customers from './Customers';
import Marketing from './Marketing';
import FotterHeader from '../Shared/Fotter/FotterHeader';
import Fotter from '../Shared/Fotter/Fotter';


const Home = () => {
  return (
    <div>
      <Box sx={{ bgcolor: "var(--second-color)", height: "550px" }}>
        <NavBar />
        <Banner />
      </Box>
      <Box>
        <OurClients />
        <Membership />
        <Feature />
        <Clubs />
        <Panna />
        <Customers />
        <Marketing />
        <FotterHeader />
        <Fotter />
      </Box>

    </div>
  );
}

export default Home;
