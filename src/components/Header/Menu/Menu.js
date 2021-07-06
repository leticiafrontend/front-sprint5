import React from 'react'
import { MenuItem } from './MenuItem/MenuItem'
import { HeaderMenu, MenuList } from './style'
import { useCategories } from '../../../hooks/useCategories'

export const Menu = () => {
  const categories = useCategories()

  return (
    <HeaderMenu>
      <MenuList>
        {categories &&
          categories.all.length > 0 &&
          categories.all.map((category) => (
            <MenuItem
              key={category.id}
              link={category.link}
              label={category.label}
            />
          ))}
      </MenuList>
    </HeaderMenu>
  )
}
