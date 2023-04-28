import { IonContent, IonPage } from "@ionic/react";

import { ARiFrameComponent } from "../../components/index";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ARiFrameComponent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
