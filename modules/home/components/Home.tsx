import Label from '@/common/components/elements/Label'
import SubContainer from '@/common/components/elements/SubContainer'
import React from 'react'
import { BsStars as StarsIcon } from "react-icons/bs";
import TitleHero from './hero/TitleHero';

const Home = () => {
  return (
    <SubContainer className="flex flex-col items-center lg:gap-8 gap-6" id="hero">
      <Label
        data-aos="fade-up"
        data-aos-anchor="#hero"
        data-aos-delay="300"
      >
        <StarsIcon size={16} className="text-purple-500" />
        <span className="text-gradient-color text-xs lg:text-base">
          Introduction to SINGA
        </span>
      </Label>
      <TitleHero />
      {/* <SosmedList /> */}
      <button
        className="bg-gradient-color rounded-full px-4 py-2 font-semibold text-neutral-200 transition duration-300 hover:scale-105 active:scale-90 text-xs lg:text-base"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-anchor="#hero"
      >
        Get Started
      </button>
    </SubContainer>
  )
}

export default Home