import React from 'react';
import { Item, Link } from './style';

interface PropsMenuItem {
  link: string;
  label: string;
}

export const MenuItem: React.FC<PropsMenuItem> = ({ link, label }) => (
  <Item>
    <Link href={link}>{label}</Link>
  </Item>
);
