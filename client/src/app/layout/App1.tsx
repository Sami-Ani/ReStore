import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "@mui/icons-material";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeController = () => {
    setDarkMode(!darkMode);
  };
  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={darkModeController} />
      <Container>
        Love is not l\
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
