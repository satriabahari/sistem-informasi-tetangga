'use client'

import FormEditOrganization from '@/modules/admin/components/organization/FormEditOrganization'
import React from 'react'

const EditOrganizationPage = ({params}: {params: {slug: string}}) => {
  return (
    <>
      <FormEditOrganization params={params}/>
    </>
  )
}

export default EditOrganizationPage