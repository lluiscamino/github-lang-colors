# github-lang-colors
Simple package that returns the color GitHub has defined for any programming language.

## Installation
Via npm:
```bash
npm i github-lang-colors
```

## Usage
```javascript
import getLanguageColor from 'github-lang-colors';
console.log(getLanguageColor('JavaScript')); // #f1e05a
console.log(getLanguageColor('PHP')); // #4f5d95
```

Note that the function is not case-sensitive.

```javascript
console.log(getLanguageColor('php')); // #4f5d95
```

## Language colors source
* [ozh/github-colors](https://github.com/ozh/github-colors)