import { GET_ARTICLES } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.articles, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return action.payload;
    default:
      return state;
  }
};