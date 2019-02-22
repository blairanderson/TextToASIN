import React, { Component } from "react";
import Cleaner from "./Cleaner";
import Footer from "./Footer";
import Header from "./Header";

const textCenter = { clear: "both", textAlign: "center" };

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cleaner />
        <Footer />
      </div>
    );
  }
}

export default App;
