import SubContainer from "@/common/components/elements/SubContainer";
import React from "react";
import Vision from "./Vision";
import Mission from "./Mission";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const About = () => {
  return (
    <SubContainer className="flex flex-col items-center justify-center gap-4 text-center">
      <SectionHeading title="Tentang Kami" />
      {/* <SectionSubHeading>TEST TEST TEST</SectionSubHeading> */}
      <div className="gap-16 flex items-center justify-center flex-col">
        <p className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla
          maiores voluptatum eum obcaecati quos adipisci, molestias nihil iusto
          harum vero magni recusandae cupiditate! At harum rem veritatis
          accusantium quia!
        </p>
        <div className="flex gap-8 px-16">
          <Vision />
          <Mission />
        </div>
      </div>
    </SubContainer>
  );
};

export default About;
