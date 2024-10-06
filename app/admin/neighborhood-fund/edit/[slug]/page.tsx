'use client'

import FormEditNeighborhoodFund from '@/modules/admin/components/neighborhood-fund/FormEditNeighborhoodFund'
import FormEditOrganization from '@/modules/admin/components/organization/FormEditOrganization'
import FormEditSocialAid from '@/modules/admin/components/social-aid/FormEditSocialAid'
import React from 'react'

const EditNeighborhoodFundPage = ({params}: {params: {slug: string}}) => {
  return (
    <>
      <FormEditNeighborhoodFund params={params}/>
    </>
  )
}

export default EditNeighborhoodFundPage