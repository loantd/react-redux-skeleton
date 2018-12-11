import {
  GET_HOME_START,
  GET_HOME_SUCCESS,
  GET_HOME_ERROR,
  TOGGLE_SHOW
} from './constants';

export const getHomeStart = () => {
  return {
    type: GET_HOME_START
  };
};

export const getHomeSuccess = (result) => {
  return {
    type: GET_HOME_SUCCESS,
    result
  };
};

export const getHomeError = (error) => {
  return {
    type: GET_HOME_ERROR,
    error
  };
};
export const toggleShow = () => {
  return {
    type: TOGGLE_SHOW
  };
};
