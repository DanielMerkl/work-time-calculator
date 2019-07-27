import React, { FC } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const CombinedProviders: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CombinedProviders;
