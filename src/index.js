import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Pdf from "./Pdf";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      pdf: "./sample.pdf",
    };
  }

  render() {
    return (
      <div>
        Pdf rendered with pdfjs
        <Pdf file={this.state.pdf} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
