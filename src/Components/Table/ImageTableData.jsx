// components/ImageComponent.js
import React from "react";

const ImageTableData = ({ src, alt, onClick }) => (
  <img
    src={src}
    alt={alt}
    onClick={onClick}
    style={{
      width: "20px",
      // height: " 100px",
      // borderRadius: "50%",
      cursor: "pointer",
    }}
  />
);
export default ImageTableData;
