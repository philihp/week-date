[![Version](https://img.shields.io/npm/v/week-date)](https://www.npmjs.com/package/week-date)
![Tests](https://github.com/philihp/week-date/workflows/tests/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/philihp/week-date/badge.svg?branch=master&force=reload)](https://coveralls.io/github/philihp/week-date?branch=master)
![License](https://img.shields.io/npm/l/week-date)

# ISO Week Date Parser

The built-in Date.parse in Node.js won't parse ISO 8601 Week-Date format, sadly. Here's a function which will. Use it as a drop-in replacement for Date.parse.

## Installation

```bash
npm install --save week-date
```

## Usage

```javascript
import WeekDate from 'week-date'

Date.parse('2020-02-29')
// => 1582934400000
new Date(Date.parse('2020-02-29'))
// => 2020-02-29T00:00:00.000Z

WeekDate.parse('2020-W09-6')
// => 1582934400000
new Date(WeekDate.parse('2020-W09-6'))
// => 2020-02-29T00:00:00.000Z
```

## References

- https://en.wikipedia.org/wiki/ISO_week_date
