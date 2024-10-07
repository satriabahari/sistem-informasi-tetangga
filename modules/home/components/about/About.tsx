import SubContainer from "@/common/components/elements/SubContainer";
import React from "react";
import Vision from "./Vision";
import Mission from "./Mission";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const About = () => {
  return (
    <SubContainer
      id="about"
      className="flex flex-col items-center justify-center gap-4"
    >
      <SectionHeading
        title="Tentang Kami"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aoa-anchor="#about"
      />
      {/* <SectionSubHeading>TEST TEST TEST</SectionSubHeading> */}
      <div className="flex flex-col items-center justify-center gap-16 leading-loose">
        <p
          className="w-full text-center dark:text-neutral-400 lg:w-1/2"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aoa-anchor="#about"
        >
          RT 001 Perumahan Arza Bukit Hijau adalah komunitas warga yang berkomitmen untuk
          menciptakan lingkungan yang harmonis, aman, dan nyaman bagi semua
          anggotanya. Kami aktif dalam membangun solidaritas, gotong royong, serta berbagai kegiatan sosial
          untuk meningkatkan kesejahteraan warga. Bersama-sama, kami berusaha
          menjaga kebersihan, keamanan, dan keharmonisan lingkungan agar
          tercipta hunian yang ideal bagi setiap keluarga.
        </p>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-32">
          <Vision />
          <Mission />
        </div>
      </div>
    </SubContainer>
  );
};

export default About;
