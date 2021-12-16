import React from "react";
import { getStorage, ref, deleteObject } from "firebase/storage";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { projectFirestore } from "../firebase/config";

const Page = ({ selectedImg, selectedImgTxt, selectedImgTitle }) => {
  const navigate = useNavigate();

  const deletePage = () => {
    deleteDoc();
    // Delete File, see: https://firebase.google.com/docs/storage/web/delete-files
    const storage = getStorage();
    // Create a reference to the file to delete
    const delRef = ref(storage, selectedImg);
    // Delete the file
    deleteObject(delRef)
      .then(() => {
        alert("File deleted successfully");
        navigate("/Search");
      })
      .catch((error) => {
        alert("An error occurred deleting the file");
        navigate("/Search");
      });
  };

  const deleteDoc = () => {
    const fs = projectFirestore;
    let collectionRef = fs.collection("images");
    collectionRef
      .where("url", "==", selectedImg)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref
            .delete()
            .then(() => {
              alert("Document successfully deleted!");
            })
            .catch(function (error) {
              alert("Error removing document: ", error);
            });
        });
      })
      .catch(function (error) {
        alert("Error getting documents: ", error);
      });
  };

  return (
    <>
      <h1>Page View: {selectedImgTitle}</h1>

      <img
        src={selectedImg}
        style={{ width: "auto", "max-height": "700px" }}
        alt="enlarged image"
      />
      <p
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedImgTxt) }}
      ></p>
      <div style={{ "text-align": "center" }}>
        <button
          onClick={() => {
            deletePage();
          }}
        >
          Delete this page
        </button>
      </div>
    </>
  );
};

export default Page;
