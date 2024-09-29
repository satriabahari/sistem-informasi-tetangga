import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Info from "./info/Info";
import Organization from "./organization/Organization";
import Rule from "./rule/Rule";

const Home = () => {
  return (
    // <SubContainer className="flex flex-col items-center lg:gap-8 gap-6" id="hero">
    <div className="space-y-32">
      <Hero />
      <About />
      <Info />
      <Organization />
      <Rule />
    </div>

    // </SubContainer>
  );
};

export default Home;
