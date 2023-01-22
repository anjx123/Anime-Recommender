import { createContext } from 'react'

export const SearchContext = createContext({
    profileData: [],
    singleData: {},
    search: () => {},
    setData: () => {},
    setSingle: () => {},
    });