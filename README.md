# github-lang-colors
[![npm version](https://badge.fury.io/js/github-lang-colors.svg)](https://www.npmjs.com/package/github-lang-colors)

Simple package that returns the color GitHub has defined for any programming language.

## Installation
Via npm:
```bash
npm i github-lang-colors
```

## Usage
```javascript
const getColor = require('github-lang-colors');
console.log(getColor('JavaScript')); // #f1e05a
console.log(getColor('PHP')); // #4f5d95
```

Note that the function is not case-sensitive.

```javascript
console.log(githubLangColors.getColor('php')); // #4f5d95
```

## Language colors source
* [ozh/github-colors](https://github.com/ozh/github-colors)
