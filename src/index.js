import days from 'year-days'

const radix = 10
const hoursPerDay = 24
const minutesPerDay = 60
const secondsPerMinute = 60
const january = 0

const year = ([sYear]) => Number.parseInt(sYear, radix)

const woy = ([, sWoy]) => Number.parseInt(sWoy.slice(1), radix)

const dow = ([, , sDow]) => Number.parseInt(sDow, radix)

const doy = (y, d) => {
  if (d > days(y)) {
    return d - 7
  }
  return d
}

// part of zeller's confluence
const daysSince = (y) =>
  365 * (y - 1970) +
  Math.floor((y - 1969) / 4) -
  Math.floor((y - 1901) / 100) +
  Math.floor((y - 1601) / 400)

const dowOfJan4 = (y) => new Date(y, january, 4).getDay()

export const parse = (input) => {
  const date = input.split('-')
  const y = year(date)
  const d = woy(date) * 7 + dow(date) - dowOfJan4(y) - 4
  const dd = doy(y, d)
  return (
    (dd + daysSince(y)) * hoursPerDay * minutesPerDay * secondsPerMinute * 1000
  )
}

export default undefined
