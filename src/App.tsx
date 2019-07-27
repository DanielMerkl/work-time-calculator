import React, { FC } from "react";
import ApplicationBar from "./components/ApplicationBar";
import BottomNavigation from "./components/BottomNavigation";
import { Redirect, Route, Switch } from "react-router-dom";
import CalculationPage from "./pages/CalculationPage";
import SettingsPage from "./pages/SettingsPage";
import AuthPage from "./pages/AuthPage";
import routes from "./utils/routes";

const App: FC = () => {
  return (
    <>
      <ApplicationBar />
      <Switch>
        <Route path={routes.calculation} exact component={CalculationPage} />
        <Route path={routes.settings} exact component={SettingsPage} />
        <Route path={routes.auth} exact component={AuthPage} />
        <Redirect to={routes.calculation} />
      </Switch>
      <BottomNavigation />
    </>
  );
};

export default App;
