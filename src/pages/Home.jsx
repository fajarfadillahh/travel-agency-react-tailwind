import React from "react";

// import components & parts
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import About from "../parts/HomePage/About";
import Discover from "../parts/HomePage/Discover";
import Experience from "../parts/HomePage/Experience";
import Video from "../parts/HomePage/Video";
import Place from "../parts/HomePage/Place";
import Subscribe from "../components/Subscribe";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Discover />
        <Experience />
        <Video />
        <Place />
        <Subscribe />
        <Sponsor />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
