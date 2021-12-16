import React, { useState, useEffect } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Fuse from "fuse.js";

const Search = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  const options = {
    shouldSort: true,
    maxPatternLength: 100,
    ignoreLocation: true,
    includeScore: true,
    keys: [
      {
        name: "title",
        weight: 0.6,
      },
      {
        name: "text",
        weight: 0.4,
      },
    ],
  };

  const fuse = new Fuse(docs, options);

  const queryUpdate = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    console.log(query);
    const results = fuse.search(query);
    const processedResults = results.map((obj) => obj.item);
    setSearchResults(processedResults);
    console.log("FUSE RESULTS:", results);
  }, [query]);

  return (
    <>
      <h1>Search</h1>
      Start typing below...
      <br />
      <input type="text" value={query} onChange={queryUpdate} />
      <div className="img-grid">
        {searchResults &&
          searchResults.map((doc) => (
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
                {doc.title}
                <br />
                {doc.text}
              </motion.p>
            </motion.div>
          ))}
      </div>
    </>
  );
};
export default Search;
