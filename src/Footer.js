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
      <br />
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
        <p>
          Made this little tool, because i'm often juggling a ton of asins
          throughout different tools, or sending them to different people.{" "}
        </p>
        <p>Also works great with fetching ASINs from a variation</p>
      </div>
    </div>
  );
};

export default Footer;
