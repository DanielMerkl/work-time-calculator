import React, { FC } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider, { ThemeContext } from "../context/ThemeContext";
import { CssBaseline } from "@material-ui/core";

const CombinedProviders: FC = ({ children }) => (
  <BrowserRouter>
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {themeContext => (
          <ThemeProvider theme={themeContext.theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  </BrowserRouter>
);

export default CombinedProviders;
