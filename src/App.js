import React, { Component } from "react";
import Cleaner from "./Cleaner";
import Footer from "./Footer";

const textCenter = { clear: "both", textAlign: "center" };

class App extends Component {
  render() {
    return (
      <div>
        <Cleaner />
        <Footer />
      </div>
    );
  }
}

export default App;
