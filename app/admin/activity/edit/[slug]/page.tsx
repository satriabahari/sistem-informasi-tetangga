"use client";

import FormEdit from "@/modules/admin/components/activity/FormEdit";

const EditActivityPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <FormEdit params={params} />
    </>
  );
};

export default EditActivityPage;
