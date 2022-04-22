import { createAction } from '@reduxjs/toolkit';

export const SET_WIN_TYPE = 'game/set-win';

const setWinAction = createAction(SET_WIN_TYPE);

export default setWinAction;
