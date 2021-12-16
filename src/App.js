import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./comps/Navbar";

import UploadForm from "./comps/UploadForm";
import Add from "./comps/Add";
import Home from "./comps/Home";
import Gallery from "./comps/Gallery";
import Edit from "./comps/Edit";
import Page from "./comps/Page";
import Search from "./comps/Search";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedImgTxt, setSelectedImgTxt] = useState("");
  const [selectedImgTitle, setSelectedImgTitle] = useState("");

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home selectedImg={selectedImg}
            selectedImgTxt={selectedImgTxt}
            setSelectedImg={setSelectedImg}
            setSelectedImgTxt={setSelectedImgTxt}
            selectedImgTitle={selectedImgTitle}
            setSelectedImgTitle={setSelectedImgTitle} />}
          />
          <Route exact path="/Add" element={<Add />} />
          <Route exact path="/Edit" element={<Edit />} />
          <Route
            exact
            path="/Page"
            element={
              <Page
                selectedImg={selectedImg}
                selectedImgTxt={selectedImgTxt}
                selectedImgTitle={selectedImgTitle}
              />
            }
          />
          <Route
            exact
            path="/Search"
            element={
              <Search
                selectedImg={selectedImg}
                selectedImgTxt={selectedImgTxt}
                setSelectedImg={setSelectedImg}
                setSelectedImgTxt={setSelectedImgTxt}
                selectedImgTitle={selectedImgTitle}
                setSelectedImgTitle={setSelectedImgTitle}
              />
            }
          />
          <Route
            exact
            path="/Gallery"
            element={<Gallery setSelectedImg={setSelectedImg} />}
          />
        </Routes>
      </Router>

      {/*
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
       */}
    </div>
  );
}

export default App;
