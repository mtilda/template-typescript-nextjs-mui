import { Box } from '@mui/material';
import FunctionComponentWithChildren from '../../types/Component';


const Main: FunctionComponentWithChildren = ({
  children,
}) => (
  <Box
    component='main'
    sx={theme => ({
      flexGrow: 1,
      padding: theme.spacing(3),
    })}
  >
    {children}
  </Box>
);

export default Main;
