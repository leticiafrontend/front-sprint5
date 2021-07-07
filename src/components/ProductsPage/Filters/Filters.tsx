import React from 'react';
import { Filter, FilterList } from './style';
import { FilterItem } from './FilterItem/FilterItem';
import { useProducts } from '../../../hooks/useProducts';

interface PropsFilters {
  id: string;
  label: string;
}

export const Filters: React.FC = () => {
  const { products } = useProducts();

  return (
    <Filter>
      <FilterList>
        {products?.filters.map((filter: PropsFilters) => (
          <FilterItem key={filter.id} label={filter.label} />
        ))}
      </FilterList>
    </Filter>
  );
};
