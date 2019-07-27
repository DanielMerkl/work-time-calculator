import React, { FC } from "react";
import ApplicationBar from "./components/ApplicationBar";
import BottomNavigation from "./components/BottomNavigation";

const App: FC = () => {
  return (
    <>
      <ApplicationBar />
      <BottomNavigation />
    </>
  );
};

export default App;
