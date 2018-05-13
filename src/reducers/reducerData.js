import { FULFILL_DATA, REQUEST_DATA } from '../actions';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_DATA:
      return { ...state, data: payload };
    case FULFILL_DATA:
      return { ...state, data: { isloading: false, files: payload } };
    default:
      return state;
  }
};
