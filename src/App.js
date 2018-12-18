import React, { Component } from "react";
import Cleaner from "./Cleaner";

const textCenter = { textAlign: "center" };

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={textCenter}>TEXT to ASINs</h1>
        <h3 style={textCenter}>
          Paste Text on the LEFT - ASINs output on the right
        </h3>
        <Cleaner />
      </div>
    );
  }
}

export default App;
