import { createAction } from '@reduxjs/toolkit';

import Attempt from '../../../models/attempt';

export const ADD_ATTEMPT_TYPE = 'game/add-attempt';

const addAttemptAction = createAction<Attempt>(ADD_ATTEMPT_TYPE);

export default addAttemptAction;
