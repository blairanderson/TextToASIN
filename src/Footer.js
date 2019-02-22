import React, { useState } from "react";

const textCenter = { clear: "both", textAlign: "center" };

const Footer = () => {
  return (
    <div style={textCenter}>
      A tiny script built by{" "}
      <a href="https://www.andersonassociates.net">Blair Anderson</a>.
      <br />
      <small>
        <a
          rel="nofollow noreferer"
          href="https://github.com/blairanderson/TextToASIN/blob/master/README.md"
        >
          100% Open Source
        </a>
      </small>
    </div>
  );
};

export default Footer;
