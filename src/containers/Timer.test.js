import Timer from './Timer'

let timer
beforeEach(() => {
  timer = new Timer()
})

it('action', () => {
  expect(timer.state.displayTime).toBe('00:03:00')
  timer.action('START')
})

describe('stringToTime', () => {
  it('convert string to time', () => {
    expect(timer.stringToTime('00:03:00')).toBe(180000)
  })

  it('throw if format is wrong', () => {
    expect(() => {
      timer.stringToTime('000300')
    }).toThrow()
    expect(() => {
      timer.stringToTime(180000)
    }).toThrow()
  })
})

describe('timeToString', () => {
  it('convert time to string', () => {
    expect(timer.timeToString(180000)).toBe('00:03:00')
  })

  it('throw if format is wrong', () => {
    expect(() => {
      timer.timeToString('00:03:00')
    }).toThrow()
  })
})
