import React from "react";
import LatestActivity from "./LatestPromotion";
import PaginationSection from "./PaginationSection";
import CategoryList from "./CategoryList";
import ActivityList from "./PromotionList";
import LatestPromotion from "./LatestPromotion";
import PromotionList from "./PromotionList";
import SubContainer from "@/common/components/elements/SubContainer";

const Promotion = () => {
  return (
    <SubContainer className="mt-28">
      {/* <LatestPromotion /> */}
      {/* <div className="my-28 space-y-6">
        <CategoryList />
        <PromotionList />
      </div> */}
      <PromotionList />
      {/* <PaginationSection /> */}
    </SubContainer>
  );
};

export default Promotion;
