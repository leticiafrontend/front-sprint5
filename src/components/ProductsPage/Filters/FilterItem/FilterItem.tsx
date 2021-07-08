import React, { useState } from 'react';
import { Icon, Item, Label } from './style';
import filter from '../../../../assets/icons/filter.svg';
import { useProducts } from '../../../../hooks/useProducts';

interface PropsFilterItem {
  label: string;
  option: string;
}

export const FilterItem: React.FC<PropsFilterItem> = ({ label, option }) => {
  const { products, setProducts } = useProducts();
  const [typeSelected, setTypeSelected] = useState<string>('');

  const handleFilter = (option: string) => {
    let reorder: any;

    switch (option) {
      case 'name':
        reorder = products.products.sort((a: any, b: any) => {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });
        break;

      case 'price':
        reorder = products.products.sort((a: any, b: any) => {
          return parseInt(a.price) > parseInt(b.price)
            ? 1
            : parseInt(a.price) < parseInt(b.price)
            ? -1
            : 0;
        });
        break;

      case 'size':
        reorder = products.products.sort((a: any, b: any) => {
          return a.sizes < b.sizes ? 1 : a.sizes > b.sizes ? -1 : 0;
        });
        break;

      case 'color':
        reorder = products.products.sort((a: any, b: any) => {
          return a.color > b.color ? 1 : a.color < b.color ? -1 : 0;
        });
        break;
    }

    setProducts((prev: any) => ({ ...prev, products: reorder }));
    setTypeSelected(option);
  };

  return (
    <Item onClick={() => handleFilter(option)}>
      <Label>{label}</Label>
      <Icon src={filter} isSelected={typeSelected === option} />
    </Item>
  );
};
