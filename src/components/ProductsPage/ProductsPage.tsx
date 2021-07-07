import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';
import { Filters } from './Filters/Filters';
import { MainProducts, Products, ProductsList } from './style';
import { Product } from './Product/Product';

import { useProducts } from '../../hooks/useProducts';
import { useFilter } from '../../hooks/useFilter';

interface PropsProduct {
  sku: number;
  image: string;
  name: string;
  price: string;
}

export const ProductsPage: React.FC = () => {
  const { products, setProducts, all } = useProducts();
  const { search } = useFilter();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (search && search.length > 0) {
      const newArray = all.products;
      const result = newArray.filter((p: any) =>
        p.name.toLowerCase().includes(search),
      );
      setProducts((prev: any) => ({ ...prev, products: result }));
      enqueueSnackbar(`Resultados para ${search}`, { variant: 'success' });
    } else {
      setProducts(all);
    }
  }, [search]);

  return (
    <MainProducts>
      <Breadcrumbs />
      <Filters />
      <Products>
        <ProductsList>
          {products?.products.length > 0 ? (
            products.products.map((product: PropsProduct) => (
              <Link to={`/product/${product.sku - 1}`}>
                <Product
                  key={product.sku}
                  image={product.image}
                  description={product.name}
                  price={product.price}
                />
              </Link>
            ))
          ) : (
            <h1>Nenhum produto encontrado!</h1>
          )}
        </ProductsList>
      </Products>
    </MainProducts>
  );
};
