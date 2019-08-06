import React, { FC, useContext } from "react";
import { FormControlLabel, Switch, Fab } from "@material-ui/core";
import { ThemeContext } from "../context/ThemeContext";
import { makeStyles } from "@material-ui/styles";
import { InstallationContext } from "../context/InstallationContext";

const SettingsPage: FC = () => {
  const classes = useStyles();
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { isInstallable, installApplication } = useContext(InstallationContext);

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
        <Fab
          color="primary"
          variant="extended"
          disabled={!isInstallable}
          onClick={installApplication}
        >
          App installieren
        </Fab>
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
