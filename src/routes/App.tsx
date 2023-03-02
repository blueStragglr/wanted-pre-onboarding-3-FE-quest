import './App.css';

import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function App() {
  return (
    <Box>
      <Grid templateColumns={"1fr 9fr"} templateRows={"1fr 1fr"}>
        <GridItem colSpan={2} >
          <Header />
        </GridItem>
        <Sidebar />
        <Outlet />
      </Grid>
    </Box >
  );
}

export default App;
