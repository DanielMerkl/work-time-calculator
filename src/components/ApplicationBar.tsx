import React, { FC } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useScreenSize } from "../utils/useScreenSize";
import { AccountCircle, Settings, Alarm } from "@material-ui/icons";
import useReactRouter from "use-react-router";
import routes from "../utils/routes";

const ApplicationBar: FC = () => {
  const { isLargeDevice } = useScreenSize();
  const { location } = useReactRouter();

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
            <SettingsButton />
          ) : (
            <CalculationButton />
          ))}
        <Typography variant="h6" align="center" style={{ margin: "auto" }}>
          Arbeitszeitrechner
        </Typography>
        {isLargeDevice &&
          (location.pathname !== routes.auth ? (
            <LoginButton />
          ) : (
            <CalculationButton />
          ))}
      </Toolbar>
    </AppBar>
  );
};

const SettingsButton: FC = () => {
  const { history } = useReactRouter();

  return (
    <Button color="inherit" onClick={() => history.push(routes.settings)}>
      <Settings style={{ marginRight: 8 }} />
      Einstellungen
    </Button>
  );
};

const CalculationButton: FC = () => {
  const { history } = useReactRouter();

  return (
    <Button color="inherit" onClick={() => history.push(routes.calculation)}>
      <Alarm style={{ marginRight: 8 }} />
      Rechner
    </Button>
  );
};

const LoginButton: FC = () => {
  const { history } = useReactRouter();

  return (
    <Button color="inherit" onClick={() => history.push(routes.auth)}>
      <AccountCircle style={{ marginRight: 8 }} />
      Einloggen
    </Button>
  );
};

export default ApplicationBar;
