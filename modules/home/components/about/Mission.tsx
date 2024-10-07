import React from "react";

const missions = [
  "Meningkatkan solidaritas dan partisipasi aktif warga dalam kegiatan sosial dan lingkungan.",
  "Menjaga keamanan dan ketertiban lingkungan dengan program ronda dan pengawasan warga.",
  "Melaksanakan program kebersihan lingkungan secara rutin untuk menciptakan lingkungan yang sehat.",
  "Meningkatkan komunikasi dan transparansi antara pengurus RT dan warga melalui media informasi.",
  "Mendukung kegiatan-kegiatan positif yang mengembangkan potensi warga dan mempererat kebersamaan.",
];

const Mission = () => {
  return (
    <div
      className="space-y-4"
      data-aos="fade-left"
      data-aos-delay="200"
      data-aoa-anchor="#about"
    >
      <h3 className="text-center text-2xl font-medium">Misi</h3>
      <ul className="list-disc space-y-2">
        {missions.map((mission, index) => (
          <li
            key={index}
            className="text-sm leading-relaxed dark:text-neutral-400 lg:text-base"
          >
            {mission}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mission;
