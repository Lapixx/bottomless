# Bottomless
A JavaScript library for creating bottomless objects

## Installation

Using Yarn:

```
yarn add bottomless
```

Using npm:

```
npm install bottomless -S
```

## Usage

```js
const bottomless = require('bottomless')

const normalObj = {}
console.log(normalObj.foo.bar)
// -> TypeError: Cannot read property 'bar' of undefined

const myObj = bottomless()
console.log(myObj.foo.bar[42])
// -> { type: 'Bottomless', path: [ 'foo', 'bar', '42' ] }
```

## API

This module exposes a single function that creates a bottomless object. Trying to
access any property or index returns another bottomless object.
