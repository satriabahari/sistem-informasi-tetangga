import React from 'react'
import LatestActivity from './LatestPromotion'
import Pagination from './Pagination'
import CategoryList from './CategoryList'
import ActivityList from './PromotionList'
import LatestPromotion from './LatestPromotion'
import PromotionList from './PromotionList'

const Promotion = () => {
  return (
    <div className="mt-28">
    <LatestPromotion/>
    <div className="my-28 space-y-6">
      <CategoryList />
      <PromotionList />
    </div>
    <Pagination />
  </div>
  )
}

export default Promotion