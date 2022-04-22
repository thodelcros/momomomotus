import { configureStore } from '@reduxjs/toolkit';

import DictionaryPort from '../../ports/DictionaryPort';
import gameReducerFactory, { GameState } from '../../use-cases/game/reducer';

export interface ExtraArgument {
    dictionaryAdapter: DictionaryPort;
}

export interface ThunkApiConfig {
    state: GameState;
    extra: ExtraArgument;
}

export type Store = ReturnType<typeof createStore>;

interface CreateStoreArgs {
    extraArgument: ExtraArgument;
    initialState?: GameState;
}

const createStore = ({ extraArgument, initialState }: CreateStoreArgs) =>
    configureStore({
        reducer: gameReducerFactory(initialState),
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument,
                },
            }),
        devTools: true,
    });

export default createStore;
