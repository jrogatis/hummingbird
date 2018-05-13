import { combineReducers } from 'redux';
import reducerData from './reducerData';

const rootReducer = combineReducers({
  data: reducerData,
});

export default rootReducer;
