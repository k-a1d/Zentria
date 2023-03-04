import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';
import './PageHeader.css'

const PageHeader = ({ title }) => {
    return (
        <div className="page-header">
            <div>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton></IonBackButton>
                </IonButtons>
                <IonTitle>Back Button</IonTitle>
                </IonToolbar>
            </IonHeader>
            </div>
            <div style={{justifyContent: "center"}}>{title}</div>
            <div><ProfilePic /></div>
        </div>
    )
}

export default PageHeader;