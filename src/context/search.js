import { createContext } from 'react'

export const SearchContext = createContext({
    profileData: [],
    singleData: {},
    aniData:[],
    setAni: () => {}, 
    search: () => {},
    setData: () => {},
    setSingle: () => {},
    });