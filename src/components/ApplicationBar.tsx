import React, { FC } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useScreenSize } from "../utils/useScreenSize";
import { Alarm, Settings } from "@material-ui/icons";
import useReactRouter from "use-react-router";
import routes from "../utils/routes";

const ApplicationBar: FC = () => {
  const { isLargeDevice } = useScreenSize();
  const { location, history } = useReactRouter();

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
        {isLargeDevice &&
          (location.pathname !== routes.settings ? (
            <Button
              color="inherit"
              onClick={() => history.push(routes.settings)}
            >
              <Settings style={{ marginRight: 8 }} />
              Einstellungen
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => history.push(routes.calculation)}
            >
              <Alarm style={{ marginRight: 8 }} />
              Rechner
            </Button>
          ))}
        <Typography variant="h6" align="center" style={{ margin: "auto" }}>
          Arbeitszeitrechner
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
