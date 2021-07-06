import React, { createContext, useEffect, useState } from 'react'

import { useSnackbar } from 'notistack'
import { useLoading } from '../hooks/useLoading'

export const CategoriesContext = createContext()

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState()
  const { enqueueSnackbar } = useSnackbar()
  const { addRequest, removeRequest } = useLoading()

  useEffect(() => {
    addRequest()
    fetch('/data/categories.json')
      .then((resp) => resp.json())
      .then((json) => {
        setCategories(json)
      })
      .catch(() =>
        enqueueSnackbar('Erro ao carregar as categorias!', {
          variant: 'error',
        })
      )
      .finally(() => removeRequest())
  }, [])

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  )
}
