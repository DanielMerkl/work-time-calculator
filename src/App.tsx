import React, { FC } from "react";
import ApplicationBar from "./components/ApplicationBar";
import BottomNavigation from "./components/BottomNavigation";
import { Redirect, Route, Switch } from "react-router-dom";
import CalculationPage from "./pages/CalculationPage";
import SettingsPage from "./pages/SettingsPage";
import { routes } from "./utils/routes";
import { makeStyles } from "@material-ui/styles";

const App: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.gridWrapper}>
      <ApplicationBar />
      <Switch>
        <Route path={routes.calculation} exact component={CalculationPage} />
        <Route path={routes.settings} exact component={SettingsPage} />
        <Redirect to={routes.calculation} />
      </Switch>
      <BottomNavigation />
    </div>
  );
};

const useStyles = makeStyles({
  gridWrapper: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "48px 1fr 56px",
  },
});

export default App;
