import React, { useState, useEffect } from "react";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import "./ARiFrameComponent.css";
import {
  HorizontalNavComponent,
  LoadingComponent,
  SplashScreenComponent,
} from "../../components";
import { SPLASH_SCREEN_LOAD_TIME } from "../../shared/constants";

interface ContainerProps {}

export const ARiFrameComponent: React.FC<ContainerProps> = () => {
  const [isMenuOpen, setMenuDisplay] = useState(false);
  const [isAppLoaded, setAppLoaded] = useState(false);
  // ...

  useEffect(() => {
    setTimeout(() => {
      //fetchUsageTotals();
      init();
    }, SPLASH_SCREEN_LOAD_TIME);
  }, []);

  const init = () => {
    setAppLoaded(false);
  };

  const toggleMenu = () => {
    setMenuDisplay((isMenuOpen) => !isMenuOpen);
  };

  const handleDismiss = () => {
    setAppLoaded(true);
  };

  return (
    <>
      {isAppLoaded ? (
        <div className="container">
          <iframe title="ar-template" src="/assets/ar.html"></iframe>
          {isMenuOpen ? (
            <HorizontalNavComponent toggleMenu={toggleMenu} />
          ) : (
            <IonFab className="menu-btn">
              <IonFabButton color="dark">
                <IonIcon onClick={toggleMenu} icon={menuOutline}></IonIcon>
              </IonFabButton>
            </IonFab>
          )}
          {/* <div className="loader-container">
            <LoadingComponent />
          </div> */}
        </div>
      ) : (
        <SplashScreenComponent handleDismiss={handleDismiss} />
      )}
    </>
  );
};
