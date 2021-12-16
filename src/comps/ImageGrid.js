import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            key={doc.id}
            layout
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImg(doc.url)}
            className="img-wrap"
          >
            <LazyLoadImage
              effect="opacity"
              alt={doc.title}
              src={doc.url}
              placeholderSrc={
                process.env.PUBLIC_URL + "/default-placeholder.png"
              }
            />
            <motion.p
              className="image-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {doc.title}<br />{doc.text}
            </motion.p>
          </motion.div>
        ))}
    </div>
  );
};
export default ImageGrid;
