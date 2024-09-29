import React from "react";
import LatestActivity from "./LatestActivity";
import PaginationSection from "./PaginationSection";
import ActivityList from "./ActivityList";
import SubContainer from "@/common/components/elements/SubContainer";

const Activity = () => {
  return (
    <SubContainer className="mt-28 space-y-28">
      {/* <LatestActivity /> */}
      <ActivityList />
      {/* <PaginationSection /> */}
    </SubContainer>
  );
};

export default Activity;
