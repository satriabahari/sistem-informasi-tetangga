import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import SubContainer from "@/common/components/elements/SubContainer";
import React from "react";
import RuleList from "./RuleList";

const Rule = () => {
  return (
    <SubContainer id="rule" className="space-y-16">
      <SectionHeading
        title="Peraturan"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aoa-anchor="#rule"
      />
      {/* <SectionSubHeading>test</SectionSubHeading> */}
      <RuleList />
    </SubContainer>
  );
};

export default Rule;
