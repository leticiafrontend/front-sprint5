import React from 'react'
import { Item, Link } from './style'

export const BreadcrumbItem = ({ link, name }) => (
  <Item>
    <Link href={link}>{name}</Link>
  </Item>
)
