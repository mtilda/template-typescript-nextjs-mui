import { AppBar as MuiAppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/material/Menu';
import FunctionComponentWithChildren from '../../types/Component';

interface AppBarProps {
  onMenuClick: any,
  open: boolean,
}

const AppBar: FunctionComponentWithChildren<AppBarProps> = ({
  children,
  onMenuClick,
  open,
}) => (
  <MuiAppBar
    sx={theme => ({ zIndex: theme.zIndex.modal + 1 })}
    position='sticky'
    color='default'
  >
    <Toolbar>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='navigation-menu'
        aria-controls='navigation-menu'
        aria-haspopup='true'
        onClick={onMenuClick}
        size='large'>
        <MenuIcon open={open} sx={{ fontSize: 'large' }} />
      </IconButton>
      {children}
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
