import React from "react";
import logo from "C:/Users/acer/Desktop/projects/docplanner_clone/src/pictures/doc.png";

const Intro = () => (
  <div className="intro">
    <img className="intro-logo" src={logo}></img>
    <h2 className="intro-title">Making the healthcare experience more human</h2>
    <div className="intro-text">
      <p>
        We want patients to find the perfect doctor and book an appointment in
        the most easy way. The patient journey should be enjoyable, and that's
        why we are always next to them: to help them find the best possible
        care. Anytime, anywhere.
      </p>
      <p>
        We also help doctors to better manage their practice and build their
        online reputation. With our integrated end-to-end solution, doctors are
        able not only to improve their online presence, but also to devote their
        time to what really matters: their patients.
      </p>
    </div>
  </div>
);

export default Intro;
