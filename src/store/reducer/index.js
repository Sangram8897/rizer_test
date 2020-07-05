import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer';
import CoursesReducer from './CoursesReducer';
const rootReducer = combineReducers({
  AuthReducer,
  ErrorReducer,
  CoursesReducer,
});
export default rootReducer;