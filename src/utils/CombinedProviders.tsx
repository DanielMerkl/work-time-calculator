import React, { FC } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";

const CombinedProviders: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default CombinedProviders;
