import { combineReducers, Reducer, Dispatch } from 'redux';
import { routerReducer } from 'react-router-redux';


// Import your state types and reducers here.
// Alert
import alertReducer from '../app/view/containers/alert/reducer';
// Language
import languageReducer from '../app/view/containers/language/reducer';
// Spinner
import spinnerReducer from '../app/view/containers/spinner/reducer';
// Modal
import modalReducer from '../app/view/containers/spinner/reducer';
// home
import reducerHome from '../app/view/containers/Home/reducer';


// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
const appReducers = combineReducers({
  router: routerReducer,
  alert: alertReducer,
  language: languageReducer,
  spinner: spinnerReducer,
  modal: modalReducer,
  reducerHome
});

export const reducers = (state, action) => {
  // if (action.type === AuthActionTypes.LOGGED_OUT) {
  //     state = {};
  // }

  return appReducers(state, action);
};
