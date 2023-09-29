# leibniz-series

Estimate pi with the
[Leibniz series](https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80).

## Example

``` javascript
const leibnizSeries = require('leibniz-series');

leibnizSeries(100);
// => 3.1514934010709914 (meh, close enough)

leibnizSeries(200);
// => 3.1465677471829556 (a little better!)
```

## Installation

``` bash
$ npm install leibniz-series
```

## API

``` javascript
const leibnizSeries = require('leibniz-series');
```

### `leibnizSeries(n)`

Estimate pi using the Leibniz series up to _Number_ `n`.
