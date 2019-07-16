const assert = require('assert');
const getLanguageColor = require('../index');

describe('github-lang-colors', function() {
    it('should return valid color code', function() {
        assert.strictEqual(getLanguageColor('JavaScript'), '#f1e05a');
        assert.strictEqual(getLanguageColor('Go'), '#00add8');
        assert.strictEqual(getLanguageColor('C++'), '#f34b7d');
        assert.strictEqual(getLanguageColor('Visual Basic'), '#945db7');
    });

    it('should return valid color code even if the language does not match case', function() {
        assert.strictEqual(getLanguageColor('Javascript'), '#f1e05a');
        assert.strictEqual(getLanguageColor('go'), '#00add8');
        assert.strictEqual(getLanguageColor('c++'), '#f34b7d');
        assert.strictEqual(getLanguageColor('visUal BaSic'), '#945db7');
    });

    it('should return error if language does not exist', function() {
        assert.deepStrictEqual(getLanguageColor('non-existent lang'), new Error('Programming language not found.'));
    });
});