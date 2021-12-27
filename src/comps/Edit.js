import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import ProgressBar from "./ProgressBar";

const Edit = ({ selectedImg, selectedImgTxt, selectedImgTitle }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(selectedImg);
  const [upload, setUpload] = useState(false);
  const [error, setError] = useState(null);
  const types = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/bmp",
    "image/gif",
  ];
  const [title, setTitle] = useState(selectedImgTitle);
  const [text, setText] = useState(selectedImgTxt);
  const titleUpdate = (e) => {
    setTitle(e.target.value);
  };
  const textUpdate = (e) => {
    setText(e.target.value);
  };
  const changeHandler = (e) => {
    console.log("changed");
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please try again. Only upload image files.");
    }
  };


  const deleteDoc = (e) => {
    e.preventDefault();
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
              alert("Document successfully updated!");
              navigate("/");
            })
            .catch(function (error) {
              alert("Error removing document: ", error);
            });
        });
        submitForm()
      })
      .catch(function (error) {
        alert("Error getting documents: ", error);
      });
  };

  const submitForm = () => {
    if (file && title && text) {
      setUpload(true);
    } else {
      setError(
        "Please try again. Select an image and add the image information."
      );
    }

    
  };
  return (
    <form>
      <h1>EDIT</h1>
      Enter the Image title:
      <input
        className="title-input"
        type="text"
        value={title}
        onChange={titleUpdate}
      ></input>
      Enter the Image text:
      <br />
      <textarea
        className="text-input"
        value={text}
        onChange={textUpdate}
      ></textarea>
      <br />
      <h3>Original Image</h3>
      <img style={{width:"100px",height:"100px"}}src={selectedImg} />

      Browse to replace the image:
      <br />
      <input onChange={changeHandler} type="file"></input>
      <div>{file && file.name}</div>
      <button onClick={deleteDoc} type="submit">
        Submit
      </button>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && upload && (
          <ProgressBar
            file={file}
            setFile={setFile}
            title={title}
            setTitle={setTitle}
            text={text}
            setText={setText}
          />
        )}
      </div>
    </form>
  );
};

export default Edit;
