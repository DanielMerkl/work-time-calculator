import React, { FC, useState } from "react";
import { Theme } from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { localStorageUtils } from "../utils/localStorageUtils";

interface Context {
  theme: Theme;
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<Context>({
  theme: createMuiTheme(),
  isDarkTheme: false,
  toggleTheme: () => {},
});

const ThemeContextProvider: FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(loadIsDarkTheme());
  const [theme, setTheme] = useState(isDarkTheme ? darkTheme : defaultTheme);

  const toggleTheme = () => {
    if (isDarkTheme) {
      setTheme(defaultTheme);
      setIsDarkTheme(false);
      localStorageUtils.saveIsDarkTheme(false);
    } else {
      setTheme(darkTheme);
      setIsDarkTheme(true);
      localStorageUtils.saveIsDarkTheme(true);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        isDarkTheme: isDarkTheme,
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#005F6A",
    },
  },
});

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#30c4e4",
    },
    type: "dark",
  },
});

const loadIsDarkTheme = (): boolean => {
  const savedIsDarkTheme = localStorageUtils.getIsDarkTheme();
  return savedIsDarkTheme !== null ? savedIsDarkTheme : false;
};
