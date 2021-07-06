import { useContext } from 'react'
import { CategoriesContext } from '../context/CategoriesContext'

export const useCategories = () => {
  const value = useContext(CategoriesContext)

  return value
}
