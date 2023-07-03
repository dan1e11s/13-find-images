import axios from 'axios';
import { useReducer } from 'react';
import { Action, Props, initPhotoState } from '../helpers/types';
import { ACCESS_KEY, API, photosContext } from '../helpers/constants';

const INIT_STATE: initPhotoState = {
  photos: [],
  currentPage: 1,
  totalPages: 0,
  searchKeyWord: '',
  loading: false,
};

const reducer = (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return { ...state, photos: action.payload };
    case 'SET_TOTAL_PAGES':
      return { ...state, totalPages: action.payload };
    case 'SET_SEARCH_KEYWORD':
      return { ...state, searchKeyWord: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const PhotosContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchPhotos = async (keyWord: string, page: number) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const { data } = await axios(`${API}/search/photos`, {
        params: {
          query: keyWord,
          client_id: ACCESS_KEY,
          page: page,
          per_page: 20,
        },
      });

      dispatch({ type: 'SET_PHOTOS', payload: data.results });
      dispatch({ type: 'SET_TOTAL_PAGES', payload: data.total_pages });
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (error) {
      console.error('errorrr', error);
    }
  };

  const setCurrentPage = (page: number) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  const setSearchKeyWord = (keyWord: string) => {
    dispatch({ type: 'SET_SEARCH_KEYWORD', payload: keyWord });
  };

  return (
    <photosContext.Provider
      value={{
        photos: state.photos,
        currentPage: state.currentPage,
        totalPages: state.totalPages,
        searchKeyWord: state.searchKeyWord,
        loading: state.loading,

        fetchPhotos,
        setCurrentPage,
        setSearchKeyWord,
      }}
    >
      {children}
    </photosContext.Provider>
  );
};

export default PhotosContextProvider;
