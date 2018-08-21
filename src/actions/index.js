import axios from 'axios';

export const FETCH_SEARCH = 'FETCH_SEARCH';

export function fetchSearchTerm(term) {
  const url = `https://www.reddit.com/r/${term}.json`;
  const request = axios.get(url);
  return {
    type: FETCH_SEARCH,
    payload: request,
  };
}
