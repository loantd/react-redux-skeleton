import {
  GET_HOME_START,
  GET_HOME_SUCCESS,
  GET_HOME_ERROR,
  TOGGLE_SHOW
} from './constants';

const initialState = {
  isLoading: false,
  data: [],
  isShow: false,
  error: null,
  searchText: 'Viet Nam'
};

const reducerHome = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_HOME_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_HOME_SUCCESS:
      return {
        ...state,
        data: action.result
      };
    case GET_HOME_ERROR:
      return {
        ...state,
        error: action.error
      };
    case TOGGLE_SHOW:
      return {
        ...state,
        isShow: !state.isShow
      };
    default:
      return state;
  }
};
export default reducerHome;
