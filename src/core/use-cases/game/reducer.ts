/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';

import Game from '../../models/game';

import { ADD_ATTEMPT_TYPE } from './actions/add-attempt-action';
import { SET_ERROR_TYPE } from './actions/set-error-action';
import { SET_LOOSE_TYPE } from './actions/set-loose-action';
import { SET_WIN_TYPE } from './actions/set-win-action';
import { START_TYPE } from './actions/start-action';

export type GameState = Game;

export const initialGameState: GameState = {
    referenceWord: null,
    attempts: [],
    error: null,
    win: false,
    loose: false,
};

const gameReducerFactory = (
    initialState: GameState | undefined = initialGameState
) =>
    createReducer(initialState, {
        [START_TYPE]: (state, action) => {
            state.referenceWord = action.payload;
            state.attempts = [];
            state.error = null;
            state.loose = false;
            state.win = false;
        },
        [ADD_ATTEMPT_TYPE]: (state, action) => {
            state.attempts.push(action.payload);
        },
        [SET_ERROR_TYPE]: (state, action) => {
            state.error = action.payload;
        },
        [SET_LOOSE_TYPE]: (state) => {
            state.loose = true;
        },
        [SET_WIN_TYPE]: (state) => {
            state.win = true;
        },
    });

export default gameReducerFactory;
