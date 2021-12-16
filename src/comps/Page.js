import React from "react";

const Page = ({ selectedImg }) => {
    return (
    <>
    <h1>Page View</h1>
      {selectedImg && (
          <img 
          src={selectedImg} alt="enlarged image" />
      )}
    </>
  );
};

export default Page;
