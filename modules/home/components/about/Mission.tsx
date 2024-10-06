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
    <div className="space-y-4">
      <h3 className="text-2xl font-medium text-center">Misi</h3>
      <ul className="list-disc space-y-2">
        {missions.map((mission, index) => (
          <li key={index} className="dark:text-neutral-400">{mission}</li>
        ))}
      </ul>
    </div>
  );
};

export default Mission;
