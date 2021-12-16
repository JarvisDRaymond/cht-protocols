import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState(false);
  const [error, setError] = useState(null);
  const types = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/bmp",
    "image/gif",
  ];
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const titleUpdate = (e) => {
    setTitle(e.target.value);
  };
  const textUpdate = (e) => {
    setText(e.target.value);
    console.log(text);
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
  const submitForm = (e) => {
    e.preventDefault();
    if (file && title) {
      setUpload(true);
    } else {
      setError(
        "Please try again. Select an image and add the image information."
      );
    }
  };
  return (
    <form>
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
      Browse to upload an image:
      <br />
      <input onChange={changeHandler} type="file"></input>
      <div>{file && file.name}</div>
      <button onClick={submitForm} type="submit">
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

export default UploadForm;
