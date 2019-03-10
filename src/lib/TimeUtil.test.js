import { stringToTime, timeToString } from './TimeUtil'

describe('stringToTime', () => {
  it('convert string to time', () => {
    expect(stringToTime('00:03:00')).toEqual(180000)
  })

  it('throw if format is wrong', () => {
    expect(() => {
      stringToTime('000300')
    }).toThrow()
    expect(() => {
      stringToTime(180000)
    }).toThrow()
  })
})

describe('timeToString', () => {
  it('convert time to string', () => {
    expect(timeToString(180000)).toEqual('00:03:00')
  })

  it('throw if format is wrong', () => {
    expect(() => {
      timeToString('00:03:00')
    }).toThrow()
  })
})
