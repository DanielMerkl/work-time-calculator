import React, { FC } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const CombinedProviders: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          {children}
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default CombinedProviders;
