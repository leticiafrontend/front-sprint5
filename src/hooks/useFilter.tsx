import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export const useFilter = () => {
  const value = useContext(FilterContext)

  return value
}
