import React, { FC } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider, { ThemeContext } from "../context/ThemeContext";
import { CssBaseline } from "@material-ui/core";
import InstallationContextProvider from "../context/InstallationContext";

const CombinedProviders: FC = ({ children }) => (
  <BrowserRouter>
    <ThemeContextProvider>
      <InstallationContextProvider>
        <ThemeContext.Consumer>
          {themeContext => (
            <ThemeProvider theme={themeContext.theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </InstallationContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);

export default CombinedProviders;
