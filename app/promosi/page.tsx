import Container from "@/common/components/elements/Container";
import Promotion from "@/modules/promosi";
import React from "react";

const PromotionPage = () => {
  return (
    <Container className="pb-28 pt-44">
      {/* <PageHeading
      title=""
      description=""
    /> */}
      <div className="space-y-6 text-center">
        <h1 className="text-5xl font-semibold" data-aos="zoom-in">
          <span className="text-gradient-color">Promotion</span>: Lorem, ipsum
          dolor.
        </h1>
        <p
          className="text-neutral-400"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet consectetur. Elementum amet congue purus
          scelerisque.
        </p>
      </div>
      <Promotion />
    </Container>
  );
};

export default PromotionPage;
