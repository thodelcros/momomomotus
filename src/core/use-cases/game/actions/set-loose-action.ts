import { createAction } from '@reduxjs/toolkit';

export const SET_LOOSE_TYPE = 'game/set-loose';

const setLooseFactory = createAction('game/set-loose');

export default setLooseFactory;
