// From 1:02:29
import React from "react";
import {motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectedImg("")

        }
     }

    return (
    <>
      {selectedImg && (
        <motion.div className="backdrop" 
            initial={{opacity:0}}
            animate={{opacity:1}}
        onClick={handleClick}>
          MODAL
          <motion.img 
          initial={{scale:0.75}}
          animate={{scale:1}}
          src={selectedImg} alt="enlarged image" />
        </motion.div>
      )}
    </>
  );
};

export default Modal;
