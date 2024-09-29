import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import SubContainer from "@/common/components/elements/SubContainer";
import React from "react";
import OrganizationList from "./OrganizationList";

const Organization = () => {
  return (
    <SubContainer className="space-y-16">
      <SectionHeading title="Struktur Organisasi" />
      {/* <SectionSubHeading>test</SectionSubHeading> */}
      <OrganizationList/>
    </SubContainer>
  );
};

export default Organization;
