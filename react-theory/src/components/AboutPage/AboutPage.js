import React from "react";
import classes from "./AboutPage.module.css";

const AboutPage = props => {
  return (
    <div className={classes.AboutPage}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default AboutPage;
