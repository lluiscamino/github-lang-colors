// Color list: https://github.com/ozh/github-colors
const colors = require('./colors.json');
module.exports = function(language) {
    try {
        return colors[language.toLowerCase()].color;
    } catch (error) {
        return new Error('Programming language not found.');
    }
};