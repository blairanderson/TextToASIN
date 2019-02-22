import React, { Component } from "react";
import Cleaner from "./Cleaner";

const textCenter = { clear: "both", textAlign: "center" };

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={textCenter}>
          <a href="https://getasins.netlify.com/">TEXT to ASINs</a>
        </h1>
        <h3 style={textCenter}>
          Paste Text on the LEFT - ASINs output on the right
        </h3>
        <div>
          <Cleaner />
        </div>
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
      </div>
    );
  }
}

export default App;
