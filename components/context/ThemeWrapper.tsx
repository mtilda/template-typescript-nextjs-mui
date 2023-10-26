import { CssBaseline, ThemeProvider } from '@mui/material';
import WrapperProps from '../../types/WrapperProps';
import theme from '../../styles/theme';
import FunctionComponentWithChildren from '../../types/Component';


const ThemeWrapper: FunctionComponentWithChildren<WrapperProps> = ({
  children,
}) => (
  <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      {children}
    </>
  </ThemeProvider>
);

export default ThemeWrapper;
