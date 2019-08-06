import React, { FC, useEffect, useState } from "react";
import { BeforeInstallPromptEvent } from "../types/interface/BeforeInstallPromptEvent";

interface InstallationContext {
  isInstallable: boolean;
  installApplication: () => void;
}

export const InstallationContext = React.createContext<InstallationContext>({
  isInstallable: false,
  installApplication: () => {}
});

const InstallationContextProvider: FC = ({ children }) => {
  const [isInstallable, setIsInstallable] = useState(false);
  const [
    defferedPrompt,
    setDefferedPrompt
  ] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      console.log("beforeInstallPrompt was fired");
      event.preventDefault();
      setDefferedPrompt(event as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const installApplication = async () => {
    if (!isInstallable || defferedPrompt === null) return;

    await defferedPrompt.prompt();
    const { outcome } = await defferedPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("accepted");
      setDefferedPrompt(null);
      setIsInstallable(false);
    } else {
      console.log("dismissed");
    }
  };

  return (
    <InstallationContext.Provider
      value={{
        isInstallable: isInstallable,
        installApplication: installApplication
      }}
    >
      {children}
    </InstallationContext.Provider>
  );
};

export default InstallationContextProvider;
