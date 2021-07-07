import React from 'react';
import { BreadcrumbsList, BreadcrumbsNav, MainBreadcrumbs } from './style';
import { BreadcrumbItem } from './BreadcrumbItem/BreadcrumbItem';
import { useCategories } from '../../../hooks/useCategories';

interface PropsBreadcrumbs {
  id: string;
  link: string;
  name: string;
}

export const Breadcrumbs: React.FC = () => {
  const categories = useCategories();

  return (
    <MainBreadcrumbs>
      <BreadcrumbsNav>
        <BreadcrumbsList>
          {categories?.current.map((category: PropsBreadcrumbs) => (
            <BreadcrumbItem
              key={category.id}
              link={category.link}
              name={category.name}
            />
          ))}
        </BreadcrumbsList>
      </BreadcrumbsNav>
    </MainBreadcrumbs>
  );
};
