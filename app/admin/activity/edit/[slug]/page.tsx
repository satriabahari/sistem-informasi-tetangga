"use client";

import FormEdit from "@/modules/admin/components/activity/FormEditActivity";
import React from 'react'

const EditActivityPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <FormEdit params={params} />
    </>
  );
};

export default EditActivityPage;
