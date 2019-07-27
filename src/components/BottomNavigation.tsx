import React, { FC, useState } from "react";
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";
import { Alarm, Settings, AccountCircle } from "@material-ui/icons";
import { useScreenSize } from "../utils/useScreenSize";

const BottomNavigation: FC = () => {
  const [navIndex, setNavIndex] = useState(0);
  const { isLargeDevice } = useScreenSize();

  if (isLargeDevice) return null;

  return (
    <MuiBottomNavigation
      value={navIndex}
      onChange={(e, newNavIndex) => setNavIndex(newNavIndex)}
      showLabels
    >
      <BottomNavigationAction label="Rechner" icon={<Alarm />} />
      <BottomNavigationAction label="Einstellungen" icon={<Settings />} />
      <BottomNavigationAction label="Einloggen" icon={<AccountCircle />} />
    </MuiBottomNavigation>
  );
};

export default BottomNavigation;
