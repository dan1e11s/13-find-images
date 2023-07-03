import { createContext, useContext } from 'react';
import { PhotoContextValue, ThemeContextValue } from './types';

export const API = 'https://api.unsplash.com';
export const ACCESS_KEY = 'giX5fGb8NvA65nDrwlWRLtgFBQz1AfN-VdQrGD-umUs';

// photos context
export const photosContext = createContext<PhotoContextValue>({
  photos: [],
  fetchPhotos: () => Promise.resolve(),
  currentPage: 1,
  setCurrentPage: () => undefined,
  setSearchKeyWord: () => undefined,
  totalPages: 0,
  searchKeyWord: '',
  loading: false,
});

export const usePhotos = () => useContext(photosContext);

// theme context
export const themeContext = createContext<ThemeContextValue>({
  theme: true,
  toggleTheme: () => undefined,
});

export const useTheme = () => useContext(themeContext);
