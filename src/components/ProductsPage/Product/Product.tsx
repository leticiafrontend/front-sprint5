import React from 'react';
import { Card, Description, Img, Price, ProductCard } from './style';

interface PropsProduct {
  image: string;
  description: string;
  price: string;
}

export const Product: React.FC<PropsProduct> = ({
  image,
  description,
  price,
}) => (
  <ProductCard>
    <Card>
      <Img src={image} />
      <Description>{description}</Description>
      <Price>{price}</Price>
    </Card>
  </ProductCard>
);
