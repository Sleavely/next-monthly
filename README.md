# next-monthly

Determine the next monthly occurence, falling back on the last day of the month.

[ ![npm version](https://img.shields.io/npm/v/next-monthly.svg?style=flat) ](https://npmjs.org/package/next-monthly "View package")
[ ![CI status](https://github.com/Sleavely/next-monthly/actions/workflows/node.js.yml/badge.svg) ](https://github.com/Sleavely/next-monthly/actions/workflows/node.js.yml "View workflow")

## Installation

```sh
npm i next-monthly
```

## Usage

```js
const nextMonthly = require('next-monthly')

// Jan 31, Feb 28 or 29, etc.
const lastDayOfThisMonth = nextMonthly()

// If you want to charge users who signed up on the 30th (but sometimes on Feb 28, etc.)
const nextBillingDate = nextMonthly({
  from: '1990-01-07T01:29:03.999Z',

  // Defaults to Date.now(). Only used here for demo purpose:
  now:  '2022-08-23T12:29:08.551Z',
})
// Date: 2022-09-07T01:29:03.999Z
```

## Options

| **Property** | **Description** |
|---|---|
| `from` | The basis for the monthly occurrance. Defaults to `0000-01-31T00:00:00.000Z` for a classic last-day-of-month experience. |
| `now` | The point in time from which to look for the next occurance. Defaults to `Date.now()`. |

## See also

* [rrule](https://www.npmjs.com/package/rrule) - Library for working with recurrence rules for calendar dates according to RFC 5545.
