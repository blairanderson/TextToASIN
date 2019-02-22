import React, { useState } from "react";

const textCenter = { clear: "both", textAlign: "center" };

const Header = () => {
  return (
    <div style={textCenter}>
      <h1>
        <a
          style={{ textDecoration: "none" }}
          href="https://getasins.netlify.com/"
        >
          TEXT to ASIN
        </a>
      </h1>
      <h3>Paste ANY Text - We parse out ASINs</h3>
    </div>
  );
};

export default Header;
