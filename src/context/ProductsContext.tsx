import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useLoading } from '../hooks/useLoading';

interface ProductsP {
  sku: number;
  image: string;
  name: string;
  price: string;
  sizes: string[];
  id: string;
}

interface ProductsA {
  sku: number;
  image: string;
  name: string;
  price: string;
  sizes: string[];
}

interface Filters {
  id: string;
  label: string;
}

interface PropsProducts {
  products:
    | {
        products: ProductsP[];
        filters: Filters[];
      }
    | any;
  all:
    | {
        products: ProductsA[];
        filters: Filters[];
      }
    | any;
  setProducts: Function;
}

export const ProductsContext = createContext({} as PropsProducts);

export const ProductsContextProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<{}>();
  const [all, setAll] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const { addRequest, removeRequest } = useLoading();
  const { pathname } = useLocation();

  useEffect(() => {
    addRequest();
    fetch('/data/products.json')
      .then((resp) => resp.json())
      .then((json) => {
        setAll(json);
        setProducts(json);
        if (pathname === '/') {
          enqueueSnackbar('Produtos carregados com sucesso!', {
            variant: 'success',
          });
        }
      })
      .catch(() =>
        enqueueSnackbar('Erro ao carregar os produtos!', { variant: 'error' }),
      )
      .finally(() => removeRequest());
  }, []);

  return (
    <ProductsContext.Provider value={{ all, products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
