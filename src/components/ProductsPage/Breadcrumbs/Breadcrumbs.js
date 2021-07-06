import React from 'react'
import { BreadcrumbsList, BreadcrumbsNav, MainBreadcrumbs } from './style'
import { BreadcrumbItem } from './BreadcrumbItem/BreadcrumbItem'
import { useCategories } from '../../../hooks/useCategories'

export const Breadcrumbs = () => {
  const categories = useCategories()

  return (
    <MainBreadcrumbs>
      <BreadcrumbsNav>
        <BreadcrumbsList>
          {categories &&
            categories.current.length > 0 &&
            categories.current.map((category) => (
              <BreadcrumbItem
                key={category.id}
                link={category.link}
                name={category.name}
              />
            ))}
        </BreadcrumbsList>
      </BreadcrumbsNav>
    </MainBreadcrumbs>
  )
}
