import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import SubContainer from "@/common/components/elements/SubContainer";
import React from "react";
import OrganizationList from "./OrganizationList";

const Organization = () => {
  return (
    <SubContainer id="organization" className="space-y-16">
      <SectionHeading
        title="Struktur Organisasi"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aoa-anchor="#organization"
      />
      {/* <SectionSubHeading>test</SectionSubHeading> */}
      <OrganizationList />
    </SubContainer>
  );
};

export default Organization;
