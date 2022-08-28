import React from "react";
import "./App.css";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import dev from "./assets/dev.png";
import twitter from "./assets/twitter.png";

function App() {
  return (
    <div className="App col center">
      <img src={dev} className="dev-image" alt="dev" />
      <p className="greet">Hi there,</p>
      <p>
        <span className="iam">I'm</span>{" "}
        <span className="name">Mohammad Fayaz</span>
      </p>
      <p className="subtitle">a software engineer</p>
      <div className="row bottom-row">
        <a className="row plink" href="https://www.linkedin.com/in/fayaz07/">
          <p className="tagText">say hi on</p>{" "}
          <img src={linkedin} className="tagImg" alt="linkedin" />
        </a>

        <a className="row plink" href="https://github.com/fayaz07">
          <p className="tagText">fork on</p>{" "}
          <img src={github} className="tagImg" alt="github" />
        </a>

        <a className="row plink" href="https://twitter.com/fayaz_7_">
          <p className="tagText">tag on</p>{" "}
          <img src={twitter} className="tagImg" alt="twitter" />
        </a>
      </div>
    </div>
  );
}

export default App;
