import Image from "next/image";
import React from "react";

const LatestActivity = () => {
  return (
    <div className="grid grid-cols-2 gap-8" id="latestactivity">
      <Image
        src="/images/dashboard.png"
        alt="hero"
        width={500}
        height={500}
        className="h-full w-full rounded-2xl"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-anchor="#latestactivity"
      />
      <div className="flex flex-col justify-between">
        <div className="space-y-4">
          <div
            className="mb-2 w-fit rounded-full border-2 border-amber-500 px-4 py-1 text-xs font-semibold text-amber-500"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-anchor="#latestactivity"
          >
            Latest Activity
          </div>
          <h3
            className="text-3xl font-semibold text-neutral-700 dark:text-neutral-300"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-anchor="#latestactivity"
          >
            A Beginners Guide to Web Development
          </h3>
          <p
            className="text-sm text-neutral-500"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-anchor="#latestactivity"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            voluptate dolorem, voluptas expedita ratione dolorum facere
            inventore ea dolore, explicabo quae! Sunt eveniet tenetur labore?
            Esse minus doloribus excepturi nihil aut quibusdam vel officiis
            neque qui maxime! Fuga enim excepturi, libero provident soluta
            similique iste dolorem, perferendis ipsam magnam reprehenderit.
          </p>
        </div>
        <div className="flex flex-col text-sm gap-2">
          <p>Jul 07, 2024, 08.00 WIB</p>
          <p>Mendalo asri</p>
        </div>
      </div>
    </div>
  );
};

export default LatestActivity;
