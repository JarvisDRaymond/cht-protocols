import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {  Link } from "react-router-dom";
import Navbar from "./comps/Navbar";

import UploadForm from "./comps/UploadForm";
import Add from "./comps/Add";
import Home from "./comps/Home";
import Gallery from "./comps/Gallery";
import Edit from "./comps/Edit";
import Search from "./comps/Search";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState("");  
  return (
    <div className="App">      
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home setSelectedImg={setSelectedImg}/>}/>
          <Route exact path="/Add" element={<Add/>}/>
          <Route exact path="/Edit" element={<Edit/>}/>
          <Route exact path="/Search" element={<Search  setSelectedImg={setSelectedImg}/>}/>
          <Route exact path="/Gallery" element={<Gallery setSelectedImg={setSelectedImg}/>}/>
          
          
        </Routes>
    </Router>
    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
     
      {/*}
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
       */}
    </div>
  );
}

export default App;