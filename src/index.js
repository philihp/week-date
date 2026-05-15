const radix = 10
const hoursPerDay = 24
const minutesPerDay = 60
const secondsPerMinute = 60
const january = 0

const year = ([sYear]) => Number.parseInt(sYear, radix)

const woy = ([, sWoy]) => Number.parseInt(sWoy.slice(1), radix)

const dow = ([, , sDow]) => Number.parseInt(sDow, radix)

const daysSince = (y) =>
  365 * (y - 1970) +
  Math.floor((y - 1969) / 4) -
  Math.floor((y - 1901) / 100) +
  Math.floor((y - 1601) / 400)

// ISO weekday: Mon=1..Sun=7 (JS getDay returns Sun=0)
const isoDowOfJan4 = (y) => {
  const d = new Date(y, january, 4).getDay()
  return d === 0 ? 7 : d
}

const parse = (input) => {
  const date = input.split('-')
  const y = year(date)
  const d = woy(date) * 7 + dow(date) - isoDowOfJan4(y) - 4
  return (
    (d + daysSince(y)) * hoursPerDay * minutesPerDay * secondsPerMinute * 1000
  )
}

module.exports = { parse }
