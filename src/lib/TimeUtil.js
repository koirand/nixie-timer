export const stringToTime = string => {
  const time = new Date('1970/01/01 ' + string + 'Z').getTime()
  if (isNaN(time)) {
    throw new Error('Invalid param')
  }
  return time
}

export const timeToString = time => {
  const string = new Date(time).toISOString()
  return (
    string.slice(11, 13) + ':' +
    string.slice(14, 16) + ':' +
    string.slice(17, 19)
  )
}
