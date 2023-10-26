import { createTheme } from '@mui/material';
// import palette from './palette';
import typography from './typography';

declare module '@mui/material/styles' {
  interface Theme { }
  // allow configuration using `createTheme`
  interface ThemeOptions { }
}

/**
 * Override the [MUI Default Theme object](https://material-ui.com/customization/default-theme/)
 */
const theme = createTheme({
  // palette: palette,
  typography: typography,
  shape: {
    borderRadius: 10,
  },
});

export default theme;
