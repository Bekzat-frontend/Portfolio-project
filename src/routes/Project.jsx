import React from "react";
import Navbar from "../components/Navbar";
import HerolImg2 from "../components/HerolImg2";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";

function Project() {
  return (
    <div>
      <Navbar />
      <HerolImg2 heading="PROJECT." text="Some of my most recent works" />
      <PricingCard />
      <Footer />
    </div>
  );
}

export default Project;
