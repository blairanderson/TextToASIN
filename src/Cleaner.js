import React, { useState } from "react";
import textToASINs from "../lib/textToASINs";

const column = { width: "49%", height: "200px", float: "left" };

const Cleaner = () => {
  const [text, setText] = useState("");
  const [newLineSeparator, setNewLineSeparator] = useState(true);
  const [commaSeparator, setCommaSeparator] = useState(false);

  let cleaned = textToASINs(text);
  if (cleaned.length === 0) {
    cleaned = "No ASINs Found in the Text";
  } else {
    let separator = "";
    if (commaSeparator) {
      separator = ",";
    }
    if (newLineSeparator) {
      separator = separator + "\n";
    }
    cleaned = cleaned.join(separator);
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <label style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            onChange={e => {
              setNewLineSeparator(!newLineSeparator);
            }}
            checked={newLineSeparator}
            name="newline"
            id="newline"
          />
          New Line Separator
        </label>
        <br />
        <label style={{ cursor: "pointer" }}>
          <input
            type="checkbox"
            onChange={e => {
              setCommaSeparator(!commaSeparator);
            }}
            checked={commaSeparator}
            name="comma"
            id="comma"
          />
          Comma Separator
        </label>
      </div>
      <textarea
        style={column}
        value={text}
        placeholder="Paste a bunch of junky text here"
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <textarea
        style={Object.assign({ userSelect: "all" }, column)}
        value={cleaned}
        onClick={e => {
          e.target.select();
        }}
        readonly={true}
      />
    </div>
  );
};

export default Cleaner;
