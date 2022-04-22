import { createAction } from '@reduxjs/toolkit';

export const START_TYPE = 'game/start';

const startAction = createAction<string>(START_TYPE);

export default startAction;
