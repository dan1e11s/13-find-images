import { ReactNode } from 'react';

// type and interface for photos
export type Photo = {
  id: string;
  width: number;
  height: number;
  urls: {
    regular: string;
  };
};

export type PhotoContextValue = {
  photos: Photo[];
  fetchPhotos: (keyWord: string, page: number) => Promise<void>;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setSearchKeyWord: (keyWord: string) => void;
  totalPages: number;
  searchKeyWord: string;
  loading: boolean;
};

export type Props = {
  children: ReactNode;
};

export interface initPhotoState {
  photos: Photo[];
  currentPage: number;
  totalPages: number;
  searchKeyWord: string;
  loading: boolean;
}

// photos types for my Action
interface SetPhotosAction {
  type: 'SET_PHOTOS';
  payload: Photo[];
}

interface SetTotalPagesAction {
  type: 'SET_TOTAL_PAGES';
  payload: number;
}

interface SetSearchKeywordAction {
  type: 'SET_SEARCH_KEYWORD';
  payload: string;
}

interface SetLoadingAction {
  type: 'SET_LOADING';
  payload: boolean;
}

interface SetCurrentPage {
  type: 'SET_CURRENT_PAGE';
  payload: number;
}

export type Action =
  | SetPhotosAction
  | SetTotalPagesAction
  | SetSearchKeywordAction
  | SetLoadingAction
  | SetCurrentPage;

// theme interface
export type ThemeContextValue = {
  theme: boolean;
  toggleTheme: () => void;
};
