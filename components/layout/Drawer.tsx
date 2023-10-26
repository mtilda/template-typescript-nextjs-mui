import { Box, Drawer as MuiDrawer, Toolbar } from '@mui/material';
import FunctionComponentWithChildren from '../../types/Component';


interface DrawerProps {
  open: boolean;
  toggle: any;
}

const Drawer: FunctionComponentWithChildren<DrawerProps> = ({
  children,
  open,
  toggle,
}) => (
  <MuiDrawer
    anchor='left'
    open={open}
    onClose={() => toggle(false)}
    sx={theme => ({
      flexShrink: 0,
      zIndex: theme.zIndex.drawer,
    })}
    slotProps={{
      backdrop: { invisible: true },
    }}
  >
    <Box sx={{
      overflow: 'auto',
    }}>
      <Toolbar />
      {children}
    </Box>
  </MuiDrawer>
);

export default Drawer;
