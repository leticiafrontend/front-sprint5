import React from 'react'
import { Filter, FilterList } from './style'
import { FilterItem } from './FilterItem/FilterItem'
import { useProducts } from '../../../hooks/useProducts'

export const Filters = () => {
  const { products } = useProducts()

  return (
    <Filter>
      <FilterList>
        {products &&
          products.filters.length > 0 &&
          products.filters.map((filter) => (
            <FilterItem key={filter.id} label={filter.label} />
          ))}
      </FilterList>
    </Filter>
  )
}
