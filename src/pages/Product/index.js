import { SnackbarProvider } from 'notistack'
import React from 'react'

import { Header } from '../../components/Header/Header'
import { Loading } from '../../components/Loading/Loading'
import { ProductPage } from '../../components/ProductPage/ProductPage'

import { CategoriesContextProvider } from '../../context/CategoriesContext'
import { FilterContextProvider } from '../../context/FilterContext'
import { LoadingContextProvider } from '../../context/LoadingContext'
import { ProductsContextProvider } from '../../context/ProductsContext'

export const Product = () => (
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
)
