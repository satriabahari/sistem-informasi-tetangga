import React from "react";

interface PageHeadingProps {
  title: string;
  description?: string;
}

const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-5xl font-semibold" data-aos="zoom-in">
        {/* <span className="text-gradient-color">My Activity</span>: Lorem, ipsum
        dolor. */}
        {title}
      </h1>
      <p className="text-neutral-400" data-aos="fade-down" data-aos-delay="200">
        {description}
      </p>
    </div>
  );
};

export default PageHeading;
