import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HerolImg2 from "../components/HerolImg2";

function About() {
  return (
    <div>
      <Navbar />
      <HerolImg2 heading="ABOUT." text="Im a friendly Front-End Developer." />
      <Footer />
    </div>
  );
}

export default About;
