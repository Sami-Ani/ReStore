import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";

export default function App() {
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
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} setDarkMode={darkModeController} />
        <Container>
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
}
