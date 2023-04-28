import React from "react";
import { IonButton } from "@ionic/react";
import "./SplashScreenComponent.css";

interface ContainerPropsZ {
  handleDismiss: any;
}

export const SplashScreenComponent: React.FC<ContainerPropsZ> = ({
  handleDismiss,
}) => {
  return (
    <>
      <IonButton color="dark" className="skip-btn" onClick={handleDismiss}>
        Skip Video
      </IonButton>
      <video
        className="splash-screen-video"
        id="myVideo"
        src="/assets/AR-opening-video.mp4"
        autoPlay
        loop
        controls
      ></video>
    </>
  );
};
