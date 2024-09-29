import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Activity from "@/modules/activity";
import React from "react";

const ActivityPage = () => {
  return (
    <Container className="pt-44">
      <PageHeading
        title="Aktivitas di lingkugan RT"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aperiam."
      />
      <Activity />
    </Container>
  );
};

export default ActivityPage;
