import { useContext } from 'react'
import { LoadingContext } from '../context/LoadingContext'

export const useLoading = () => {
  const value = useContext(LoadingContext)

  return value
}
