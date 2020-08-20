import React, { useState, useEffect } from "react";
import "./Projects.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { socialMediaLinks, openSource } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import { projects } from "../../portfolio.js";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  });

  function getRepoData() {
    setrepo(projects);
  }

  const title = emoji("Open Source & other Projects 📖");

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="opensource">
        <h1 className="project-title">{title}</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            return <GithubRepoCard repo={v} key={i} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={socialMediaLinks.github}
          newTab={true}
        />
      </div>
    </Fade>
  );
}
