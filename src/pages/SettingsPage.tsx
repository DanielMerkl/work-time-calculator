import React, { FC, useContext } from "react";
import { Button, FormControlLabel, Switch } from "@material-ui/core";
import { ThemeContext } from "../context/ThemeContext";
import { makeStyles } from "@material-ui/styles";

const SettingsPage: FC = () => {
  const classes = useStyles();
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className={classes.gridWrapper}>
        <FormControlLabel
          control={
            <Switch
              checked={isDarkTheme}
              onChange={toggleTheme}
              color="primary"
            />
          }
          label="Dunkles Design"
        />
        <Button color="primary" variant="contained">
          App installieren
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  gridWrapper: {
    margin: "32px auto",
    width: 250,
    display: "grid",
    gridGap: 16,
    gridTemplateColumns: "1fr"
  }
});

export default SettingsPage;
