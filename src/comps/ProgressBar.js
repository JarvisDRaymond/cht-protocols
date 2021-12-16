import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
// Around 35 Minutes
// https://www.youtube.com/watch?v=vUe91uOx7R0&t=144s
const ProgressBar = ({ file, setFile, title, setTitle, text, setText }) => {
  const { url, progress } = useStorage(file, title, text);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
      setTitle("");
      setText("");
    }
  }, [url, setFile]);

  return (
    <motion.div 
    initial={{width: 0}}
    animate={{width:progress+'%'}}

    className="progress-bar">
      {progress > 0 && "Uploading File"}
    </motion.div>
  );
};
export default ProgressBar;
