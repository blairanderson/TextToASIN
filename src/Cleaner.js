import React, { useState } from "react";
import Highlighter from "react-highlight-words";
import textToASINs from "./textToASINs";

const column = { width: "49%", minHeight: "200px", float: "left" };

const Cleaner = () => {
  const [text, setText] = useState("");
  const [newLineSeparator, setNewLineSeparator] = useState(false);
  const [commaSeparator, setCommaSeparator] = useState("|");
  const ASINs = textToASINs(text);
  let cleaned;
  if (ASINs.length === 0) {
    cleaned = "No ASINs Found in the Text";
  } else {
    let separator = "";
    if (commaSeparator) {
      separator = commaSeparator;
    }
    if (newLineSeparator) {
      separator = separator + "\n";
    }
    cleaned = ASINs.join(separator);
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
        value={text}
        style={column}
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
      {ASINs.length > 0 && (
        <div style={{ whiteSpace: "pre-line" }}>
          <h3>Text with Highlights</h3>
          <TextArea text={text} ASINs={ASINs} />
        </div>
      )}

      <hr />
    </div>
  );
};

export default Cleaner;

function TextArea(props) {
  const { text, ASINs } = props;
  // if empty, show textarea
  return (
    <Highlighter
      highlightClassName="bg-blue red"
      searchWords={ASINs}
      autoEscape={true}
      textToHighlight={text}
    />
  );
}
