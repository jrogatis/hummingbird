import _ from 'lodash';
import faker from 'faker';

export const REQUEST_DATA = 'REQUEST_DATA';
export const FETCH_REQUEST = 'FETCH_REQUEST';

const delay = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 3000);
  });
};

const data = () =>
  [...Array(_.random(1, 5)).keys()].map(item => ({
    name: faker.system.fileName(),
    date: faker.date.past(),
  }));

export const isFetching = payload => {
  return {
    type: FETCH_REQUEST,
    payload: { isLoading: true },
  };
};

export const requestData = async payload => {
  const result = await delay(data());
  return {
    type: REQUEST_DATA,
    payload: { data: result, isLoading: false },
  };
};
