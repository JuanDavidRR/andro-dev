import React, { lazy, Suspense } from "react";
import Advantage from "../components/Advantage";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Porfolio = lazy(() => import("../components/Porfolio"));
const Services = lazy(() => import("../components/Services"));
const Footer = lazy(() => import("../components/Footer"));

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Suspense>
        <Services />
        <Advantage />
        <Porfolio />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Homepage;
