import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Statistic from "@/modules/statistic";
import React from "react";

const StatisticPage = () => {
  return (
    <Container className="pt-14">
      <PageHeading
        title="Statistic"
        // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aperiam."
      />
      <Statistic />
    </Container>
  );
};

export default StatisticPage;
