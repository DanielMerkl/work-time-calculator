import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const ApplicationBar: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" align="center" style={{ margin: "auto" }}>
          Arbeitszeitrechner
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
