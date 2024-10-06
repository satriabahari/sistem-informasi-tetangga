import React from "react";
import NeighbohoodFundTable from "./NeighbohoodFundTable";
import SocialAidTable from "./SocialAidTable";
import SubContainer from "@/common/components/elements/SubContainer";

const Statistic = () => {
  return (
    <SubContainer className="mt-28 space-y-28 w-full">
      <NeighbohoodFundTable />
      <SocialAidTable />
    </SubContainer>
  );
};

export default Statistic;
