import React, { useState } from "react";

const textCenter = { clear: "both", textAlign: "center" };
const CONTAINER = { margin: "auto", maxWidth: "800px" };

const Footer = () => {
  return (
    <div style={textCenter}>
      <div>
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
      <div style={{ margin: "auto", maxWidth: "600px" }}>
        <p>
          We made this script because we are very often juggling a ton of ASINs
          for different projects and putting them back into different tools or
          sending them to clients.
        </p>
        <p>(works great with pulling ASINs from a variation)</p>
      </div>

      <Video />
    </div>
  );
};

export default Footer;

const Video = () => {
  return (
    <div style={CONTAINER}>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: "25px",
          height: 0
        }}
      >
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source type="video/mp4" src={"/video/whatistext-to-asins.mp4"} />
        </video>
      </div>
    </div>
  );
};
