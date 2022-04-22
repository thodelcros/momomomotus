import inMemoryDictionaryAdapter from '../../adapters/dictionary/inMemoryDictionaryAdapter';
import createStore from '../../core/frameworks/redux/create-store';
import init from '../../core/use-cases/game/init';
import makeAttempt from '../../core/use-cases/game/make-attempt';

let store = createStore({
    extraArgument: {
        dictionaryAdapter: inMemoryDictionaryAdapter,
    },
});

describe('Make attempt', () => {
    beforeEach(() => {
        store = createStore({
            extraArgument: {
                dictionaryAdapter: inMemoryDictionaryAdapter,
            },
        });
    });

    it('succeed if word is correct', () => {
        store.dispatch(init());

        expect(store.getState().win).toBe(false);

        store.dispatch(makeAttempt('diplodocus'));

        expect(store.getState().win).toBe(true);
    });
});
