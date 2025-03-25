import React from "react";
import PalestineBanner from "./PalestineBanner";
import "./home.css";

export default function HomePage() {
  return (
    <div>
      <PalestineBanner />
      <div className="App col center">
        <img src="/assets/dev.png" className="dev-image" alt="dev" />
        <p className="greet">Hi there,</p>
        <p>
          <span className="iam">I&apos;m</span>{" "}
          <span className="name">Mohammad Fayaz</span>
        </p>
        <p className="subtitle">a software engineer</p>
        <div className="row bottom-row">
          <a className="row plink" href="https://www.linkedin.com/in/fayaz07/">
            <p className="tagText">say hi on</p>{" "}
            <img src="/assets/linkedin.png" className="tagImg" alt="linkedin" />
          </a>

          <a className="row plink" href="https://github.com/fayaz07">
            <p className="tagText">fork on</p>{" "}
            <img src="/assets/github.png" className="tagImg" alt="github" />
          </a>

          <a className="row plink" href="https://twitter.com/fayaz_7_">
            <p className="tagText">tag on</p>{" "}
            <img src="/assets/twitter.png" className="tagImg" alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}
