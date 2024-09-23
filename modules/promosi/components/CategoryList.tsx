"use client";

import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import CATEGORY_PROMOTION_ITEMS from "@/common/constants/category_promotion";

const CategoryList = () => {
  const filteredCategories = CATEGORY_PROMOTION_ITEMS.filter((item) => item.isShow);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex gap-4">
      {filteredCategories.map((category, index) => (
        <CategoryItem
          isActive={activeIndex === index}
          key={index}
          index={index}
          bgColor={category.bgColor}
          handleClick={handleClick}
          // data-aos="fade-down"
          // data-aos-delay={index * 100 + 200}
        >
          {category.title}
        </CategoryItem>
      ))}
    </div>
  );
};

export default CategoryList;
