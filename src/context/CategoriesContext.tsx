import React, { createContext, useEffect, useState } from 'react';

import { useSnackbar } from 'notistack';
import { useLoading } from '../hooks/useLoading';

interface PropsCategories {
  categories: {};
  all: [
    {
      id: number;
      label: string;
      link: string;
    },
  ];
  current: [
    {
      id: number;
      link: string;
      name: string;
    },
  ];
}

export const CategoriesContext = createContext(
  {} as PropsCategories | undefined,
);

export const CategoriesContextProvider: React.FC = ({ children }) => {
  const [categories, setCategories] =
    useState<PropsCategories | undefined>(undefined);
  const { enqueueSnackbar } = useSnackbar();
  const { addRequest, removeRequest } = useLoading();

  useEffect(() => {
    addRequest();
    fetch('/data/categories.json')
      .then((resp) => resp.json())
      .then((json) => {
        setCategories(json);
      })
      .catch(() =>
        enqueueSnackbar('Erro ao carregar as categorias!', {
          variant: 'error',
        }),
      )
      .finally(() => removeRequest());
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );
};
