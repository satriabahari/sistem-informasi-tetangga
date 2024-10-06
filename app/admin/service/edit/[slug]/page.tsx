"use client";

import FormEdit from "@/modules/admin/components/promotion/FormEdit";
import FormEditService from "@/modules/admin/components/service/FormEditService";
import React from "react";

const EditServicePage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <FormEditService params={params} />
    </>
  );
};

export default EditServicePage;
