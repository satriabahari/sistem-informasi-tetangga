import Container from "@/common/components/elements/Container";
import Activity from "@/modules/kegiatan";
import React from "react";

const ActivityPage = () => {
  return (
    <Container className="pt-44">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl font-semibold" data-aos="zoom-in">
          <span className="text-gradient-color">My Activity</span>: Lorem, ipsum dolor.
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
      <Activity />
    </Container>
  );
};

export default ActivityPage;
