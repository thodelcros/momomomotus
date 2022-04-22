import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApiConfig } from '../../frameworks/redux/create-store';
import { isCorrectAnswer } from '../../models/attempt';
import { isLastPossibleAttempt } from '../../models/game';

import addAttemptAction from './actions/add-attempt-action';
import setErrorAction from './actions/set-error-action';
import setLooseAction from './actions/set-loose-action';
import setWinAction from './actions/set-win-action';
import validateAttempt from './validate-attempt';

const makeAttempt = createAsyncThunk<void, string, ThunkApiConfig>(
    'game/make-attempt',
    (attemptedWord, { dispatch, getState }) => {
        const game = getState();

        try {
            const attempt = validateAttempt(
                game.referenceWord as string,
                attemptedWord
            );

            dispatch(addAttemptAction(attempt));

            if (isCorrectAnswer(attempt)) {
                dispatch(setWinAction());
            }
        } catch (error: any) {
            dispatch(setErrorAction(error.message));
        }

        if (isLastPossibleAttempt(game)) {
            dispatch(setLooseAction());
        }
    }
);

export default makeAttempt;
