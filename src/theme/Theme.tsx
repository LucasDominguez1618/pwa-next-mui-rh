import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";


const options = {
  palette: {
    primary: {
      light: "#757ce8",
      main: "#ff2301",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
};


const theme = createTheme(options);


const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;