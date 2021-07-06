import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

export const useProducts = () => {
  const value = useContext(ProductsContext)

  return value
}
