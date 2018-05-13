import _ from 'lodash';
import faker from 'faker';

export const FULFILL_DATA = 'FULFILL_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';

const delay = data => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(data), 3000);
  });
};

const data = () => {
  return [...Array(_.random(1, 5)).keys()].map(item => {
    return faker.system.fileName();
  });
};

export const requestData = async payload => {
  await delay();
  return {
    type: REQUEST_DATA,
    payload: delay(data),
  };
};

export const fulfillData = payload => {
  return {
    type: FULFILL_DATA,
    payload: payload,
  };
};
