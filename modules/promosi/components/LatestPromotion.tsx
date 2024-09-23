import Image from "next/image";
import React from "react";

const LatestPromotion = () => {
  return (
    <div className="grid grid-cols-2 gap-8" id="latestpromotion">
      <Image
        src="/images/dashboard.png"
        alt="hero"
        width={500}
        height={500}
        className="h-full w-full rounded-2xl"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-anchor="#latestpromotion"
      />
      <div className="flex flex-col justify-between">
        <div className="space-y-4">
          <div
            className="mb-2 w-fit rounded-full border-2 border-amber-500 px-4 py-1 text-xs font-semibold text-amber-500"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-anchor="#latestpromotion"
          >
            Latest Post
          </div>
          <h3
            className="text-3xl font-semibold text-neutral-700 dark:text-neutral-300"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-anchor="#latestpromotion"
          >
            A Beginners Guide to Web Development
          </h3>
          <p
            className="text-sm text-neutral-500"
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-anchor="#latestpromotion"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            voluptate dolorem, voluptas expedita ratione dolorum facere
            inventore ea dolore, explicabo quae! Sunt eveniet tenetur labore?
            Esse minus doloribus excepturi nihil aut quibusdam vel officiis
            neque qui maxime! Fuga enim excepturi, libero provident soluta
            similique iste dolorem, perferendis ipsam magnam reprehenderit.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={"/images/hero.jpg"}
            className="h-8 w-8 rounded-full"
            width={24}
            height={24}
            alt="Satria Bahari"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-anchor="#latestpromotion"
          />
          <div className="flex flex-col">
            <p
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
              data-aos="fade-down"
              data-aos-delay="700"
              data-aos-anchor="#latestpromotion"
            >
              Satria Bahari
            </p>
            <span
              className="text-xs text-neutral-500"
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-anchor="#latestpromotion"
            >
              Jul 07, 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPromotion;
