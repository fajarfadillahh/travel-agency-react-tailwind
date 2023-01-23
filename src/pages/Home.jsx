import React from "react";

// import components & parts
import Header from "../components/Header";
import Hero from "../parts/HomePage/Hero";
import About from "../parts/HomePage/About";
import Discover from "../parts/HomePage/Discover";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Discover />
      </main>
    </>
  );
}
