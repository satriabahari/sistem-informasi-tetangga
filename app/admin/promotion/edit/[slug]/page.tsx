"use client";

import FormEdit from "@/modules/admin/components/promotion/FormEdit";
import React from "react";

const EditPromotionPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <FormEdit params={params} />
    </>
  );
};

export default EditPromotionPage;
