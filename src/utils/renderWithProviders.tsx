import React, { ReactChild } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

export const renderWithProviders = (children: ReactChild) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};
