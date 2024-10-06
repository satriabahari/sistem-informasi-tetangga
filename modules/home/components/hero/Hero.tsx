import React from "react";
import TitleHero from "./TitleHero";
import { Badge } from "@/common/components/ui/badge";
import { BsStars as StarsIcon } from "react-icons/bs";
import { Button } from "@/common/components/ui/button";
import SubContainer from "@/common/components/elements/SubContainer";

const Hero = () => {
  return (
    <SubContainer className="flex flex-col items-center space-y-4">
      <Badge className="rounded-full border-2 border-neutral-300 from-neutral-200 to-neutral-100  bg-gradient-to-r dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900">
        <StarsIcon size={16} className="text-yellow-400" />
        <span className="text-gradient-color text-xs lg:text-base">SINGA</span>
      </Badge>

      <TitleHero />

      {/* <Button>Get Started</Button> */}
    </SubContainer>
  );
};

export default Hero;
