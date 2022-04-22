import { createAction } from '@reduxjs/toolkit';

export const SET_ERROR_TYPE = 'game/set-error';

const setErrorAction = createAction<string>(SET_ERROR_TYPE);

export default setErrorAction;
