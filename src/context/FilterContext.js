import React, { createContext, useState } from 'react'

export const FilterContext = createContext()

export const FilterContextProvider = ({ children }) => {
  const [search, setSearch] = useState()

  return (
    <FilterContext.Provider value={{ search, setSearch }}>
      {children}
    </FilterContext.Provider>
  )
}
