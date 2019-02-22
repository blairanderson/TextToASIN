import React, { useState } from "react";

const textCenter = { clear: "both", textAlign: "center" };

const Header = () => {
  return (
    <div style={textCenter}>
      <h1>
        <a href="https://getasins.netlify.com/">TEXT to ASINs</a>
      </h1>
      <h3>Paste Text on the LEFT - ASINs output on the right</h3>
    </div>
  );
};

export default Header;
