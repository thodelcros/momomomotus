import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApiConfig } from '../../frameworks/redux/create-store';

import setReferenceWordAction from './actions/start-action';

export const INIT_TYPE = 'game/init';

const init = createAsyncThunk<void, undefined, ThunkApiConfig>(
    INIT_TYPE,
    (_, { dispatch, extra }) => {
        const { dictionaryAdapter } = extra;

        const newWord = dictionaryAdapter.pickWord();

        dispatch(setReferenceWordAction(newWord));
    }
);

export default init;
