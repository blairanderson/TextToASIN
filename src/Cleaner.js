import React, { useState } from "react";

const TEST = ``;

const textToASINs = text => {
  const matcher = text.match(/(B[A-Z0-9]{9})/g);
  return matcher && matcher.length
    ? matcher
        .filter(function(x, i, a) {
          return a.indexOf(x) === i;
        })
        .join("\n")
    : ["No ASINs Found in the Text"];
};

const textCenter = { textAlign: "center" };

const Cleaner = () => {
  const [text, setText] = useState(TEST);

  const cleanText = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1 style={textCenter}>TEXT to ASINs</h1>
      <h3 style={textCenter}>
        Paste Text on the LEFT - ASINs output on the right
      </h3>
      <textarea
        style={{ width: "49%", height: "500px", float: "left" }}
        value={text}
        placeholder="Paste a bunch of junky text here"
        onChange={cleanText}
      />

      <textarea
        style={{ width: "49%", height: "500px", float: "left" }}
        value={textToASINs(text)}
        disabled={true}
      />
    </div>
  );
};

export default Cleaner;
