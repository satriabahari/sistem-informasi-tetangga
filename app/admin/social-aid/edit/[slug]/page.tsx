'use client'

import FormEditOrganization from '@/modules/admin/components/organization/FormEditOrganization'
import FormEditSocialAid from '@/modules/admin/components/social-aid/FormEditSocialAid'
import React from 'react'

const EditSocialAidPage = ({params}: {params: {slug: string}}) => {
  return (
    <>
      <FormEditSocialAid params={params}/>
    </>
  )
}

export default EditSocialAidPage