import React from "react";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { Link } from "react-router-dom";
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
      <a href={selectedImg} target="_blank">
        <img
          src={selectedImg}
          style={{ maxWidth: "95%", maxHeight: "700px" }}
          alt="enlarged image"
        />
      </a>
      <p
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedImgTxt) }}
      ></p>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            deletePage();
          }}
        >
          Delete this page
        </button>
        <Link to="/Edit">
          <button style={{ marginLeft: "25px" }} type="button">
            Edit Page
          </button>
        </Link>
      </div>
    </>
  );
};

export default Page;
