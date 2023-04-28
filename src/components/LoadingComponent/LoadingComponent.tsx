import { IonIcon } from "@ionic/react";
import { logoAppleAr } from "ionicons/icons";
import "./LoadingComponent.css";

export const LoadingComponent: React.FC = () => {
  return (
    <>
      {" "}
      <IonIcon
        className="animate__animated animate__heartBeat animate__infinite	infinite"
        icon={logoAppleAr}
      ></IonIcon>
      <p className="loader-txt">Point Camera at Hiro Marker</p>
    </>
  );
};
