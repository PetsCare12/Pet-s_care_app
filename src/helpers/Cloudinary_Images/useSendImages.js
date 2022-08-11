import { useState } from "react";

export const useSendImage = () => {

    const [urlImage, seturlImage] = useState("");
  
    let myWidgetUser = window.cloudinary.createUploadWidget(
        {
            cloudName: "petscareimagecloud",
            uploadPreset: "petscare_preset_users"
        },
        (error, result) => {
            if (!error && result && result.event === "success") {
            console.log("Imagen subida con exito!!");
            seturlImage(result.info.url);
          }
        }
    );

    let myWidgetVeter = window.cloudinary.createUploadWidget(
        {
          cloudName: "petscareimagecloud",
          uploadPreset: "petscare_preset_veterinarios"
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Imagen subida con exito!!");
            seturlImage(result.info.url);
          }
        }
    );


    let myWidgetClinics = window.cloudinary.createUploadWidget(
        {
          cloudName: "petscareimagecloud",
          uploadPreset: "petscare_preset_clinics"
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Imagen subida con exito!!");
            seturlImage(result.info.url);
          }
        }
    );

    let myWidgetMascotas = window.cloudinary.createUploadWidget(
      {
        cloudName: "petscareimagecloud",
        uploadPreset: "petscare_preset_mascotas"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Imagen subida con exito!!");
          seturlImage(result.info.url);
        }
      }
  );

    return {
        myWidgetClinics,
        myWidgetUser,
        myWidgetVeter,
        myWidgetMascotas,
        urlImage
      };
};