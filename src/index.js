module.exports = exports = ({
  from = new Date('0000-01-31T00:00:00.000Z'),
  now = Date.now(),
} = {}) => {
  const _from = from instanceof Date ? from : new Date(from)
  const _now = now instanceof Date ? now : new Date(now)

  // When the period of recurrances hasnt even begun yet
  if (_now < _from) return _from

  // TODO: literally everything below here

  const lastDayOfNowMonth = new Date(Date.UTC(_now.getUTCFullYear(), _now.getUTCMonth() + 1, 0))
  const targetInNowMonth = Math.min(_from.getUTCDate(), lastDayOfNowMonth.getUTCDate())

  const targetMonthUTC = _now.getUTCMonth() + (
    _now.getUTCDate() > targetInNowMonth
      ? 1
      : 0
  )

  const nextDate = new Date(Date.UTC(
    _now.getUTCFullYear(),
    targetMonthUTC,
    Math.min(_from.getUTCDate(), new Date(Date.UTC(_now.getUTCFullYear(), targetMonthUTC + 1, 0)).getUTCDate()),
    _from.getUTCHours(),
    _from.getUTCMinutes(),
    _from.getUTCSeconds(),
    _from.getUTCMilliseconds(),
  ))

  return nextDate
}
