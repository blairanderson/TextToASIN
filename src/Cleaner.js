import React, { useState } from "react";
import textToASINs from "../lib/textToASINs";

const textCenter = { textAlign: "center" };
const column = { width: "49%", height: "200px", float: "left" };

const Cleaner = () => {
  const [text, setText] = useState("");

  const cleanText = e => {
    setText(e.target.value);
  };

  let cleaned = textToASINs(text);
  if (cleaned.length === 0) {
    cleaned = "No ASINs Found in the Text";
  }

  return (
    <div>
      <h1 style={textCenter}>TEXT to ASINs</h1>
      <h3 style={textCenter}>
        Paste Text on the LEFT - ASINs output on the right
      </h3>
      <textarea
        style={column}
        value={text}
        placeholder="Paste a bunch of junky text here"
        onChange={cleanText}
      />

      <textarea style={column} value={cleaned} disabled={true} />
    </div>
  );
};

export default Cleaner;
