import React, { useState, useRef } from "react";
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
  IonImg,
  IonThumbnail,
} from "@ionic/react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonModal,
} from "@ionic/react";
import { skullOutline } from "ionicons/icons";
import { closeOutline } from "ionicons/icons";
import { glassesOutline } from "ionicons/icons";
import { bonfireOutline } from "ionicons/icons";
import { arrowBackOutline } from "ionicons/icons";
import "./HorizontalNavComponent.css";
interface NavProps {
  toggleMenu: () => any;
}
export const HorizontalNavComponent: React.FC<NavProps> = (props) => {
  const { toggleMenu } = props;
  const [isToxicExposureOpen, setIsToxicExposureOpen] = useState(false);
  const [isACloserLookOpen, setIsACloserLookOpen] = useState(false);
  const [isSandTRedZoneOpen, setIsSandTRedZoneOpen] = useState(false);
  const [isStoryOfRedZone, setIsStoryOfRedZone] = useState(false); // firstImg
  const [secondThumbnailImg, setSecondThumbnailImg] = useState(false);
  const [thirdThumbnailImg, thirdSecondThumbnailImg] = useState(false);
  const [fourthThumbnailImg, fourthSecondThumbnailImg] = useState(false);

  const modal = useRef<HTMLIonModalElement>(null);

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  const dismiss = () => {
    modal.current?.dismiss();
  };

  return (
    <div className="nav-container">
      <div className="nav-header animate__animated animate__fadeIn">
        Close
        <IonIcon
          onClick={toggleMenu}
          className="close-icon"
          icon={closeOutline}
        ></IonIcon>
      </div>
      <div className="nav-body animate__animated animate__slideInRight">
        <div className="nav-cards">
          <IonCard
            className="large"
            onClick={() => setIsToxicExposureOpen(true)}
            color="dark"
          >
            <IonCardHeader>
              <IonIcon icon={skullOutline} size="large" color="light"></IonIcon>
              {/* <IonCardTitle>Toxic Exposure</IonCardTitle> */}
              {/* <IonCardSubtitle>Toxic Exposure</IonCardSubtitle> */}
            </IonCardHeader>

            <IonCardContent>
              <strong>Toxic Exposure</strong>
            </IonCardContent>
          </IonCard>
        </div>
        <div className="nav-cards">
          <IonCard
            className="large"
            onClick={() => setIsACloserLookOpen(true)}
            color="dark"
          >
            <IonCardHeader>
              <IonIcon
                icon={glassesOutline}
                size="large"
                color="light"
              ></IonIcon>
              {/* <IonCardTitle>A Closer Look</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
            </IonCardHeader>

            <IonCardContent>
              <strong>A Closer Look</strong>
            </IonCardContent>
          </IonCard>
        </div>
        <div className="nav-cards">
          <IonCard
            color="dark"
            className="large"
            onClick={() => setIsSandTRedZoneOpen(true)}
          >
            <IonCardHeader>
              <IonIcon
                icon={bonfireOutline}
                size="large"
                color="light"
              ></IonIcon>
              {/* <IonCardTitle></IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
            </IonCardHeader>

            <IonCardContent>
              <strong>S&T RedZone</strong>
            </IonCardContent>
          </IonCard>
        </div>
        {/* <div className="nav-cards">
          <IonCard onClick={() => setIsStoryOfRedZone(true)} color="light">
            <IonCardHeader>
              <IonCardTitle>Story of RedZone</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Card Content</IonCardContent>
          </IonCard>
        </div>
        <div className="nav-cards">
          <IonCard id="open-modal" color="light">
            <IonCardHeader>
              <IonCardTitle>Pop Over Modal</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Card Content</IonCardContent>
          </IonCard>
        </div> */}
      </div>

      <IonModal isOpen={isToxicExposureOpen}>
        <IonHeader>
          <IonToolbar color="dark">
            <IonButtons slot="end">
              <IonButton onClick={() => setIsToxicExposureOpen(false)}>
                Close
                <IonIcon
                  onClick={toggleMenu}
                  className="close-icon"
                  icon={closeOutline}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="dark" className="ion-padding">
          <div>
            {/* <video
              className="second-videos"
              id="myVideo"
              src="/assets/toxic_exposure_video.mp4"
              autoPlay
              loop
              controls
            ></video> */}
            <Player autoPlay src="/assets/toxic_exposure_video.mp4">
              <ControlBar autoHide={false} className="my-class" />
            </Player>
          </div>
          <h3>Toxic Exposure</h3>
          <p>
            Firefighters come face to face with danger on a daily basis. It’s
            literally in the job title. But surprisingly, more firefighters die
            years later from cancer and other diseases due to chronic exposure
            to toxic agents, than any other cause. When toxic particulates
            released in the fireground environment come in cont act with exposed
            skin or penetrate interfaces in PPE coverings, the results can be
            deadly.
          </p>
        </IonContent>
      </IonModal>

      <IonModal isOpen={isACloserLookOpen}>
        <IonHeader color="dark">
          <IonToolbar color="dark">
            <IonButtons slot="end">
              <IonButton onClick={() => setIsACloserLookOpen(false)}>
                Close
                <IonIcon
                  onClick={toggleMenu}
                  className="close-icon"
                  icon={closeOutline}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="dark" className="ion-padding">
          <video
            className="second-videos"
            id="myVideo"
            src="/assets/closer_look_video.mp4"
            autoPlay
            loop
            controls
          ></video>
          <h2>A Closer Look</h2>
          <p>
            To save the lives of first responders, S&T partnered with LION to
            develop a breakthrough in personal protective equipment (PPE).
            RedZone will help reduce the exposure of firefighters to toxic
            chemicals in the fireground environment.
          </p>
        </IonContent>
      </IonModal>

      <IonModal isOpen={isSandTRedZoneOpen}>
        <div>
          <IonToolbar color="dark">
            <IonButtons slot="end">
              <IonButton onClick={() => setIsSandTRedZoneOpen(false)}>
                Close
                <IonIcon
                  onClick={toggleMenu}
                  className="close-icon"
                  icon={closeOutline}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </div>
        <IonContent color="dark" className="ion-padding">
          <h2>S&T RedZone</h2>
          <p>
            In its mission to support first responders, S&T built a relationship
            with LION and in collaboration with first responders, doctors, and
            our industry partner LION, we developed RedZone PPE to (literally)
            seal the capability gap of existing PPE.
          </p>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonImg
                  onClick={() => setIsStoryOfRedZone(true)}
                  src="/assets/firefighter1.png"
                  alt=""
                ></IonImg>
              </IonCol>
              <IonCol>
                <IonImg
                  onClick={() => setSecondThumbnailImg(true)}
                  src="/assets/firefighter2.png"
                  alt=""
                ></IonImg>
              </IonCol>
              <IonCol>
                <IonImg
                  onClick={() => thirdSecondThumbnailImg(true)}
                  src="/assets/firefighter3.png"
                  alt=""
                ></IonImg>
              </IonCol>
            </IonRow>
          </IonGrid>
          {/* <IonGrid>
            <IonRow>
              <IonCol>
                <IonImg
                  onClick={() => fourthSecondThumbnailImg(true)}
                  src="/assets/firefighter4.png"
                  alt=""
                ></IonImg>
              </IonCol>
              <IonCol></IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonGrid> */}
        </IonContent>
      </IonModal>

      <IonModal isOpen={isStoryOfRedZone}>
        <IonHeader>
          <IonToolbar color="dark">
            <IonButtons slot="start">
              <IonButton onClick={() => setIsStoryOfRedZone(false)}>
                <IonIcon
                  icon={arrowBackOutline}
                  size="large"
                  color="light"
                ></IonIcon>{" "}
                Back
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="dark" className="ion-padding">
          <IonImg src="/assets/firefighter1.png" alt=""></IonImg>
        </IonContent>
      </IonModal>

      <IonModal isOpen={secondThumbnailImg}>
        <IonHeader>
          <IonToolbar color="dark">
            <IonButtons slot="start">
              <IonButton onClick={() => setSecondThumbnailImg(false)}>
                <IonIcon
                  icon={arrowBackOutline}
                  size="large"
                  color="light"
                ></IonIcon>{" "}
                Back
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="dark" className="ion-padding">
          <IonImg src="/assets/firefighter2.png" alt=""></IonImg>
        </IonContent>
      </IonModal>

      <IonModal isOpen={thirdThumbnailImg}>
        <IonHeader>
          <IonToolbar color="dark">
            <IonButtons slot="start">
              <IonButton onClick={() => thirdSecondThumbnailImg(false)}>
                <IonIcon
                  icon={arrowBackOutline}
                  size="large"
                  color="light"
                ></IonIcon>{" "}
                Back
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="dark" className="ion-padding">
          <IonImg src="/assets/firefighter3.png" alt=""></IonImg>
        </IonContent>
      </IonModal>

      {/* <IonModal isOpen={fourthThumbnailImg}>
        <IonHeader>
          <IonToolbar color="dark">
            <IonButtons slot="start">
              <IonButton onClick={() => fourthSecondThumbnailImg(false)}>
                <IonIcon
                  icon={arrowBackOutline}
                  size="large"
                  color="light"
                ></IonIcon>{" "}
                Back
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="dark" className="ion-padding">
          <IonImg src="/assets/firefighter4.png" alt=""></IonImg>
        </IonContent>
      </IonModal> */}
      {/* <IonModal
        ref={modal}
        trigger="open-modal"
        presentingElement={presentingElement!}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h2>Pop Over Modal Test</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum
            quidem recusandae ducimus quos reprehenderit. Veniam, molestias
            quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
            Eaque, dicta.
          </p>
        </IonContent>
      </IonModal> */}
    </div>
  );
};
