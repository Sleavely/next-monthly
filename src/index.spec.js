const nextMonthly = require('./index')

it('defaults to last day of this month', () => {
  const now = new Date()
  const expected = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0)).toJSON()

  const output = nextMonthly().toJSON()

  expect(output).toBe(expected)
})

it('accepts a "now" override', () => {
  const output = nextMonthly({
    now: '2003-11-13T00:00:00.000Z',
  })
  expect(output.toJSON()).toBe('2003-11-30T00:00:00.000Z')
})

it('returns date within the same month as now', () => {
  const output = nextMonthly({
    from: '2022-07-26T00:00:00.000Z',
    now: '2022-08-03T00:00:00.000Z',
  })
  expect(output.toJSON()).toBe('2022-08-26T00:00:00.000Z')
})

it('returns date in next month if it has already passed', () => {
  const output = nextMonthly({
    from: '2022-07-26T00:00:00.000Z',
    now: '2022-08-31T00:00:00.000Z',
  })
  expect(output.toJSON()).toBe('2022-09-26T00:00:00.000Z')
})

it('returns the from-date when it is in the future', () => {
  const output = nextMonthly({
    from: '2022-08-23T01:00:00.000Z',
    now: '1999-08-23T00:00:00.000Z',
  })
  expect(output.toJSON()).toBe('2022-08-23T01:00:00.000Z')
})

it('returns 29th on leap year when target is 31st', () => {
  const output = nextMonthly({
    from: '1990-07-31T00:00:00.000Z',
    now: '2000-02-15T00:00:00.000Z',
  })
  expect(output.toJSON()).toBe('2000-02-29T00:00:00.000Z')
})

it('respects time, not just dates', () => {
  // one millisecond after - yields next month
  expect(nextMonthly({
    from: new Date('1990-01-07T01:29:03.999Z'),
    now: new Date('2023-01-07T01:29:04.000Z'),
  }).toJSON()).toBe('2023-02-07T01:29:03.999Z')

  // a few ms before - yields today
  expect(nextMonthly({
    from: new Date('1990-01-07T01:29:03.999Z'),
    now: new Date('2023-01-07T01:29:03.888Z'),
  }).toJSON()).toBe('2023-01-07T01:29:03.999Z')
})

it('behaves like README', () => {
  const nextBillingDate = nextMonthly({
    from: new Date('1990-01-07T01:29:03.999Z'),
    now: new Date('2022-08-23T12:29:08.551Z'),
  })
  expect(nextBillingDate.toJSON()).toBe('2022-09-07T01:29:03.999Z')
})
