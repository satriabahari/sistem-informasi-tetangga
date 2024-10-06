import SubContainer from "@/common/components/elements/SubContainer";
import React from "react";
import Vision from "./Vision";
import Mission from "./Mission";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const About = () => {
  return (
    <SubContainer className="flex flex-col items-center justify-center gap-4 ">
      <SectionHeading title="Tentang Kami" />
      {/* <SectionSubHeading>TEST TEST TEST</SectionSubHeading> */}
      <div className="flex flex-col items-center justify-center gap-16 leading-loose">
        <p className="w-1/2 dark:text-neutral-400 text-center">
          RT Mendalo Asri adalah komunitas warga yang berkomitmen untuk
          menciptakan lingkungan yang harmonis, aman, dan nyaman bagi semua
          anggotanya. Sebagai bagian dari [Nama Kelurahan], kami aktif dalam
          membangun solidaritas, gotong royong, serta berbagai kegiatan sosial
          untuk meningkatkan kesejahteraan warga. Bersama-sama, kami berusaha
          menjaga kebersihan, keamanan, dan keharmonisan lingkungan agar
          tercipta hunian yang ideal bagi setiap keluarga.
        </p>
        <div className="grid grid-cols-2 gap-32 ">
          <Vision />
          <Mission />
        </div>
      </div>
    </SubContainer>
  );
};

export default About;
