import { ReactElement, useState } from 'react';
import { Box, Typography } from '@mui/material';

import Drawer from './Drawer';
import Main from './Main';
import NavTree from '../navigation/NavTree';
import ThemeWrapper from '../context/ThemeWrapper';
import FunctionComponentWithChildren from '../../types/Component';
import AppBar from './AppBar';


const HomeLayout: FunctionComponentWithChildren = ({
  children,
}) => {
  const [ drawerOpen, setDrawerOpen ] = useState<boolean | boolean>(false);

  return (
    <ThemeWrapper>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <AppBar open={drawerOpen} onMenuClick={() => setDrawerOpen(true)}>
          <Typography variant='h1'>Example</Typography>
        </AppBar>
        <Drawer open={drawerOpen} toggle={setDrawerOpen}>
          <NavTree />
        </Drawer>
        <Main>
          {children}
        </Main>
      </Box>
    </ThemeWrapper>
  );
};

export const getHomeLayout = (page: ReactElement): ReactElement => (
  <HomeLayout>{page}</HomeLayout>
);
