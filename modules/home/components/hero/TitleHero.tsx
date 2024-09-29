import React from "react";

const TitleHero = () => {
  return (
    <div className="flex flex-col items-center space-y-2 text-center lg:space-y-5">
      <h1 className="text-4xl font-bold leading-tight text-neutral-700 dark:text-neutral-300 lg:text-6xl">
        Selamat Datang di
        <br />
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
          Sistem Informasi Tetangga
        </span>{" "}
      </h1>
      <h5 className="text-xs text-neutral-500 dark:text-neutral-400 lg:w-2/3 lg:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam expedita
        sapiente amet voluptatum praesentium aliquam.
      </h5>
    </div>
  );
};

export default TitleHero;
