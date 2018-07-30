// @flow

import { FETCH_DATA_ERROR } from '../constants/ActionType';

export const fetchDataError = (jsonObject) => (
  {
    type: FETCH_DATA_ERROR,
    payload: { jsonObject }
  }
);
