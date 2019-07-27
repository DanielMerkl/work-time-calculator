import React, { FC } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useScreenSize } from "../utils/useScreenSize";
import { AccountCircle, Settings } from "@material-ui/icons";

const ApplicationBar: FC = () => {
  const { isLargeDevice } = useScreenSize();

  return (
    <AppBar position="static">
      <Toolbar
        variant="dense"
        style={
          isLargeDevice
            ? { display: "grid", gridTemplateColumns: "180px auto 180px" }
            : {}
        }
      >
        {isLargeDevice && (
          <Button color="inherit">
            <Settings style={{ marginRight: 8 }} />
            Einstellungen
          </Button>
        )}
        <Typography variant="h6" align="center" style={{ margin: "auto" }}>
          Arbeitszeitrechner
        </Typography>
        {isLargeDevice && (
          <Button color="inherit">
            <AccountCircle style={{ marginRight: 8 }} />
            Einloggen
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
