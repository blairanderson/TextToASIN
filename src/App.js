import React, { Component } from "react";
import Cleaner from "./Cleaner";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Cleaner />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
