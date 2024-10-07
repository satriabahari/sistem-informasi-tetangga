import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Promotion from "@/modules/promotion";
import React from "react";

const PromotionPage = () => {
  return (
    <Container className="pt-14">
      <PageHeading
        title="Promosi"
        // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aperiam."
      />
      <Promotion />
    </Container>
  );
};

export default PromotionPage;
