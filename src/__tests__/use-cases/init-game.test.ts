import inMemoryDictionaryAdapter from '../../adapters/dictionary/inMemoryDictionaryAdapter';
import createStore from '../../core/frameworks/redux/create-store';
import init from '../../core/use-cases/game/init';

let store = createStore({
    extraArgument: {
        dictionaryAdapter: inMemoryDictionaryAdapter,
    },
});

describe('Init game', () => {
    beforeEach(() => {
        store = createStore({
            extraArgument: {
                dictionaryAdapter: inMemoryDictionaryAdapter,
            },
        });
    });

    it('create game with a reference word', () => {
        expect(store.getState().referenceWord).toBeNull();

        store.dispatch(init());

        expect(store.getState().referenceWord).not.toBeNull();
    });
});
