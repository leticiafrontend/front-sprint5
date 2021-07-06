import React from 'react'
import { Card, Description, Img, Price, ProductCard } from './style'

export const Product = ({ image, description, price }) => (
  <ProductCard>
    <Card>
      <Img src={image} />
      <Description>{description}</Description>
      <Price>{price}</Price>
    </Card>
  </ProductCard>
)
