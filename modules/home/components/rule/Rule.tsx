import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import SubContainer from "@/common/components/elements/SubContainer";
import React from "react";
import RuleList from "./RuleList";

const Rule = () => {
  return (
    <SubContainer className="space-y-16">
      <SectionHeading title="Peraturan" />
      {/* <SectionSubHeading>test</SectionSubHeading> */}
      <RuleList/>
    </SubContainer>
  );
};

export default Rule;
