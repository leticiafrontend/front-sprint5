import React from 'react'
import { Item, Link } from './style'

export const MenuItem = ({ link, label }) => (
  <Item>
    <Link href={link}>{label}</Link>
  </Item>
)
