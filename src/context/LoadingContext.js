import React, { createContext, useState } from 'react'

export const LoadingContext = createContext()

export const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  const addRequest = () => {
    setIsLoading(true)
  }

  const removeRequest = () => {
    setIsLoading(false)
  }

  return (
    <LoadingContext.Provider value={{ isLoading, addRequest, removeRequest }}>
      {children}
    </LoadingContext.Provider>
  )
}
