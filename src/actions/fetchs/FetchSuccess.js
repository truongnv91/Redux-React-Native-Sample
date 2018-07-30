// @flow

import { FETCH_DATA_SUCCESS } from '../constants/ActionType';

export const fetchDataSuccess = (jsonObject) => (
  {
    type: FETCH_DATA_SUCCESS,
    payload: { jsonObject },
  }
);
