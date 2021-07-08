import React, { createContext, useState } from 'react';

interface PropsSearch {
  search: any;
  setSearch: Function;
  typeSelected: string;
  setTypeSelected: Function;
}

export const FilterContext = createContext({} as PropsSearch);

export const FilterContextProvider: React.FC = ({ children }) => {
  const [search, setSearch] = useState<string>();
  const [typeSelected, setTypeSelected] = useState<string>('');

  return (
    <FilterContext.Provider
      value={{ search, setSearch, typeSelected, setTypeSelected }}
    >
      {children}
    </FilterContext.Provider>
  );
};
