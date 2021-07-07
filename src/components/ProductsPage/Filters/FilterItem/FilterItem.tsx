import React from 'react';
import { Icon, Item, Label } from './style';
import filter from '../../../../assets/icons/filter.svg';

interface PropsFilterItem {
  label: string;
}

export const FilterItem: React.FC<PropsFilterItem> = ({ label }) => (
  <Item>
    <Label>{label}</Label>
    <Icon src={filter} />
  </Item>
);
