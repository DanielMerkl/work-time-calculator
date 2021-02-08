import React, { FC, useContext, useState } from "react";
import { FormControlLabel, Switch, Fab, IconButton } from "@material-ui/core";
import { Info } from "@material-ui/icons";
import { ThemeContext } from "../context/ThemeContext";
import { makeStyles } from "@material-ui/styles";
import { InstallationContext } from "../context/InstallationContext";
import InformationDialog from "../components/InformationDialog";

const SettingsPage: FC = () => {
  const classes = useStyles();
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { isInstallable, installApplication } = useContext(InstallationContext);

  const [informationDialogOpen, setInformationDialogOpen] = useState(false);

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
        <div>
          <Fab
            color="primary"
            variant="extended"
            disabled={!isInstallable}
            onClick={installApplication}
          >
            App installieren
          </Fab>
          {!isInstallable && (
            <IconButton onClick={() => setInformationDialogOpen(true)}>
              <Info />
            </IconButton>
          )}
        </div>
      </div>
      <InformationDialog
        open={informationDialogOpen}
        onClose={() => setInformationDialogOpen(false)}
      />
    </div>
  );
};

const useStyles = makeStyles({
  gridWrapper: {
    margin: "32px auto",
    width: 250,
    display: "grid",
    gridGap: 16,
    gridTemplateColumns: "1fr",
  },
});

export default SettingsPage;
