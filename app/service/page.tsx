import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Services from "@/modules/service";
import React from "react";

const ServicePage = () => {
  return (
    <Container className="pt-14">
      <PageHeading
        title="Layanan Surat Menyurat"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aperiam."
      />
      <Services />
    </Container>
  );
};

export default ServicePage;
