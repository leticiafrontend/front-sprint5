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
    switch (option) {
      case 'name':
        const reorderName = products.products.sort((a: any, b: any) => {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });
        setProducts((prev: any) => ({ ...prev, products: reorderName }));
        setTypeSelected(option);
        break;

      case 'price':
        const reorderPrice = products.products.sort((a: any, b: any) => {
          return parseInt(a.price) > parseInt(b.price)
            ? 1
            : parseInt(a.price) < parseInt(b.price)
            ? -1
            : 0;
        });
        setProducts((prev: any) => ({ ...prev, products: reorderPrice }));
        setTypeSelected(option);
        break;

      case 'size':
        const reorderSize = products.products.sort((a: any, b: any) => {
          return a.sizes < b.sizes ? 1 : a.sizes > b.sizes ? -1 : 0;
        });
        setProducts((prev: any) => ({ ...prev, products: reorderSize }));
        setTypeSelected(option);
        break;

      case 'color':
        const reorderColor = products.products.sort((a: any, b: any) => {
          return a.color > b.color ? 1 : a.color < b.color ? -1 : 0;
        });
        setProducts((prev: any) => ({ ...prev, products: reorderColor }));
        setTypeSelected(option);
        break;
    }
  };

  return (
    <Item onClick={() => handleFilter(option)}>
      <Label>{label}</Label>
      <Icon src={filter} isSelected={typeSelected === option} />
    </Item>
  );
};
