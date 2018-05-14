import { REQUEST_DATA, FETCH_REQUEST } from '../actions';

export default (state = [], action) => {
  console.log('action', action);
  const { type, payload } = action;
  switch (type) {
    case REQUEST_DATA:
      return { ...state, data: payload.data, isLoading: false };
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
