import React from "react";
import "../styles/css/aboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <section className="section who-am-i">
        <h2>Who Am I?</h2>
        <p>
          Hi! I'm a passionate web developer with a background in functional
          analysis. After completing a full-stack web development course at
          BeCode, I embarked on a journey to become a Junior Web Developer.
        </p>
      </section>

      <section className="section professional-life">
        <h2>Professional Life</h2>
        <p>
          I specialize in backend development using Python and Django but also
          work with JavaScript, Express, and MongoDB/PostgreSQL for API
          development. My goal is to build scalable and efficient web
          applications while constantly learning and improving my skills.
        </p>
      </section>

      <section className="section personal-life">
        <h2>Personal Life</h2>
        <p>
          I come from the same country as Dacia and have a strong curiosity for
          technology. I'm always looking for ways to improve and challenge
          myself, whether in coding or other aspects of life.
        </p>
      </section>

      <section className="section hobbies">
        <h2>Hobbies</h2>
        <p>
          In my free time, I enjoy building projects, experimenting with new
          technologies, and playing games. I'm also interested in UI/UX design
          and adding creative animations to web applications.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
