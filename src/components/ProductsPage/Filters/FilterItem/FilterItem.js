import React from 'react'
import { Icon, Item, Label } from './style'
import filter from '../../../../assets/icons/filter.svg'

export const FilterItem = ({ label }) => (
  <Item>
    <Label>{label}</Label>
    <Icon src={filter} />
  </Item>
)
