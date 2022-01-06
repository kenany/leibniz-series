const test = require('tape');
const isFunction = require('lodash.isfunction');

const leibnizSeries = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(leibnizSeries));
});

test('approaches pi as series increases', function(t) {
  for (var i = 2; i < 1001; i++) {
    t.ok(
      i % 2
        ? leibnizSeries(i) < leibnizSeries(i - 1)
        : leibnizSeries(i) > leibnizSeries(i - 1)
    );
  }
  t.end();
});
