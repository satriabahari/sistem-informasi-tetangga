import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import SubContainer from "@/common/components/elements/SubContainer";
import React from "react";
import InfoList from "./InfoList";

const Info = () => {
  return (
    <SubContainer className="space-y-16">
      <SectionHeading title="Info" />
      {/* <SectionSubHeading>test</SectionSubHeading> */}
      <InfoList />
    </SubContainer>
  );
};

export default Info;
