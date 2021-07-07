import React from 'react';
import { Item, Link } from './style';

interface PropsBreadcrumbsItem {
  link: string;
  name: string;
}

export const BreadcrumbItem: React.FC<PropsBreadcrumbsItem> = ({
  link,
  name,
}) => (
  <Item>
    <Link href={link}>{name}</Link>
  </Item>
);
