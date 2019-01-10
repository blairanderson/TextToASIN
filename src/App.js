import React, { Component } from "react";
import Cleaner from "./Cleaner";

const textCenter = { textAlign: "center" };

class App extends Component {
  render() {
    return (
      <div style={textCenter}>
        <h1>TEXT to ASINs</h1>
        <h3>Paste Text on the LEFT - ASINs output on the right</h3>
        <Cleaner />
        <div>
          <small>
            <a href="https://codesandbox.io/s/github/blairanderson/TextToASIN">
              fork on codesandbox
            </a>
          </small>
        </div>
      </div>
    );
  }
}

export default App;
