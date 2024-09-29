import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-2 text-center dark:bg-neutral-800">
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
