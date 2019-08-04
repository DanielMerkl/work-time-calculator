import React, { ChangeEvent, FC } from "react";
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";
import { Alarm, Settings } from "@material-ui/icons";
import { useScreenSize } from "../utils/useScreenSize";
import useRouter from "use-react-router";
import routes from "../utils/routes";

enum NavIndex {
  Calculation,
  Settings
}

const BottomNavigation: FC = () => {
  const { isLargeDevice } = useScreenSize();
  const { history, location } = useRouter();

  if (isLargeDevice) return null;

  const calculateNavIndex = (): NavIndex => {
    switch (location.pathname) {
      case routes.calculation:
        return NavIndex.Calculation;
      case routes.settings:
        return NavIndex.Settings;
      default:
        return NavIndex.Calculation;
    }
  };

  const handleChange = (e: ChangeEvent<{}>, newNavIndex: NavIndex) => {
    switch (newNavIndex) {
      case NavIndex.Calculation:
        history.push(routes.calculation);
        break;
      case NavIndex.Settings:
        history.push(routes.settings);
        break;
    }
  };

  return (
    <MuiBottomNavigation
      value={calculateNavIndex()}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction label="Rechner" icon={<Alarm />} />
      <BottomNavigationAction label="Einstellungen" icon={<Settings />} />
    </MuiBottomNavigation>
  );
};

export default BottomNavigation;
