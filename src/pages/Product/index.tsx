import React from 'react';
import { SnackbarProvider } from 'notistack';

import { Header } from '../../components/Header/Header';
import { Loading } from '../../components/Loading/Loading';
import { ProductPage } from '../../components/ProductPage/ProductPage';

import { CategoriesContextProvider } from '../../context/CategoriesContext';
import { FilterContextProvider } from '../../context/FilterContext';
import { LoadingContextProvider } from '../../context/LoadingContext';
import { ProductsContextProvider } from '../../context/ProductsContext';

export const Product: React.FC = () => (
  <>
    <SnackbarProvider>
      <LoadingContextProvider>
        <CategoriesContextProvider>
          <FilterContextProvider>
            <ProductsContextProvider>
              <Header />
              <ProductPage />
              <Loading />
            </ProductsContextProvider>
          </FilterContextProvider>
        </CategoriesContextProvider>
      </LoadingContextProvider>
    </SnackbarProvider>
  </>
);
