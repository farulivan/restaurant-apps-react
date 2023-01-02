import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id: string): string => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (query: string): string => `${CONFIG.BASE_URL}search?q=${query}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
