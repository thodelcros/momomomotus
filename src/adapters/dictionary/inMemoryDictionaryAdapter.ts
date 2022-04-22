import DictionaryPort from '../../core/ports/DictionaryPort';

const inMemoryDictionaryAdapter: DictionaryPort = {
    pickWord: () => 'diplodocus',
};

export default inMemoryDictionaryAdapter;
