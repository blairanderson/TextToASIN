import React, { useState } from "react";
import textToASINs from "./textToASINs";

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
      separator = commaSeparator;
    }
    if (newLineSeparator) {
      separator = separator + "\n";
    }
    cleaned = cleaned.join(separator);
  }

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
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
            type="radio"
            onChange={e => {
              setCommaSeparator(",");
            }}
            checked={commaSeparator === ","}
            name="comma"
            id="comma"
          />
          Comma Separator
        </label>
        <label style={{ cursor: "pointer" }}>
          <input
            type="radio"
            onChange={e => {
              setCommaSeparator("|");
            }}
            checked={commaSeparator === "|"}
            name="pipe"
            id="pipe"
          />
          Pipe Separator
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
        readOnly={true}
      />
    </div>
  );
};

export default Cleaner;
