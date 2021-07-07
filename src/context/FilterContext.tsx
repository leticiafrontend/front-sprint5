import React, { createContext, useState } from 'react';

interface PropsSearch {
  search: any;
  setSearch: Function;
}

export const FilterContext = createContext({} as PropsSearch);

export const FilterContextProvider: React.FC = ({ children }) => {
  const [search, setSearch] = useState<string>();

  return (
    <FilterContext.Provider value={{ search, setSearch }}>
      {children}
    </FilterContext.Provider>
  );
};
