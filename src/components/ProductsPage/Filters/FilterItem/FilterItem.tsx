import React from 'react';
import { Icon, Item, Label } from './style';
import filter from '../../../../assets/icons/filter.svg';
import { useProducts } from '../../../../hooks/useProducts';

interface PropsFilterItem {
  label: string;
  option: string;
}

export const FilterItem: React.FC<PropsFilterItem> = ({ label, option }) => {
  const { products, setProducts } = useProducts();

  const handleFilter = (option: string) => {
    switch (option) {
      case 'name':
        products.products.sort((a: any, b: any) => {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        });
        console.log(products.products);
        break;

      case 'price':
        products.products.sort((a: any, b: any) => {
          return parseInt(a.price) > parseInt(b.price)
            ? 1
            : parseInt(a.price) < parseInt(b.price)
            ? -1
            : 0;
        });
        console.log(products.products);
        break;

      case 'size':
        products.products.sort((a: any, b: any) => {
          return a.sizes < b.sizes ? 1 : a.sizes > b.sizes ? -1 : 0;
        });
        console.log(products.products);
        break;

      case 'color':
        products.products.sort((a: any, b: any) => {
          return a.color > b.color ? 1 : a.color < b.color ? -1 : 0;
        });
        console.log(products.products);
        break;
    }
  };

  return (
    <Item onClick={() => handleFilter(option)}>
      <Label>{label}</Label>
      <Icon src={filter} />
    </Item>
  );
};
