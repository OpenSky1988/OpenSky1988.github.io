import { combineReducers } from 'redux';

import menu from './menuReducer';
import project from './projectReducer';
import article from './articleReducer';
import articles from './articlesReducer';
import contactForm from './contactFormReducer';
import isAuthorized from './authReducer';
import error from './errorReducer';
import isLoading from './messageLoaderReducer';
import isSuccessBlockShown from './messageSuccessBlockReducer';

export default combineReducers ({
  menu,
  project,
  article,
  articles,
  contactForm,
  isAuthorized,
  error,
  isLoading,
  isSuccessBlockShown,
});
