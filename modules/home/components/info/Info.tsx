import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import SubContainer from "@/common/components/elements/SubContainer";
import React from "react";
import InfoList from "./InfoList";

const Info = () => {
  return (
    <SubContainer id="info" className="space-y-16">
      <SectionHeading
        title="Info"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aoa-anchor="#info"
      />
      {/* <SectionSubHeading>test</SectionSubHeading> */}
      <InfoList />
    </SubContainer>
  );
};

export default Info;
