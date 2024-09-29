import React from "react";
import TitleHero from "./TitleHero";
import { Badge } from "@/common/components/ui/badge";
import { BsStars as StarsIcon } from "react-icons/bs";
import { Button } from "@/common/components/ui/button";
import SubContainer from "@/common/components/elements/SubContainer";

const Hero = () => {
  return (
    <SubContainer className="flex flex-col items-center space-y-4">
      <Badge className="rounded-full">
        <StarsIcon size={16} className="text-purple-500" />
        <span className="text-gradient-color text-xs lg:text-base">
          SINGA
        </span>
      </Badge>

      <TitleHero />

      <Button
      // className="bg-gradient-color rounded-full px-4 py-2 text-xs font-semibold text-neutral-200 transition duration-300 hover:scale-105 active:scale-90 lg:text-base"
      >
        Get Started
      </Button>
    </SubContainer>
  );
};

export default Hero;
