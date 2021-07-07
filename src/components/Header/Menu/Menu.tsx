import React from 'react';
import { MenuItem } from './MenuItem/MenuItem';
import { HeaderMenu, MenuList } from './style';
import { useCategories } from '../../../hooks/useCategories';

interface PropsCategory {
  id: number;
  link: string;
  label: string;
}

export const Menu: React.FC = () => {
  const categories = useCategories();

  return (
    <HeaderMenu>
      <MenuList>
        {categories?.all.map((category: PropsCategory) => (
          <MenuItem
            key={category.id}
            link={category.link}
            label={category.label}
          />
        ))}
      </MenuList>
    </HeaderMenu>
  );
};
