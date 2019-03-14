import Timer from './Timer'

let timer
beforeEach(() => {
  timer = new Timer()
})

it('action', () => {
  timer.action('START')
})

describe('getMSec', () => {
  it('get the correct milliseconds of time', async () => {
    await timer.setState({
      time: {
        h10: 0,
        h1: 0,
        m10: 0,
        m1: 3,
        s10: 0,
        s1: 0
      }
    })
    expect(timer.getMSec()).toBe(180000)
  })

  it('throw if format is wrong', async () => {
    await timer.setState({
      time: {
        h10: 'x',
        h1: 0,
        m10: 0,
        m1: 3,
        s10: 0,
        s1: 0
      }
    })
    expect(() => {
      timer.getMSec()
    }).toThrow()
  })
})

describe('setTimeFromMsec', () => {
  it('set time from milliseconds', async () => {
    console.log(timer.state.time.h10)
    await timer.setTimeFromMsec(180000)
    expect(timer.state.time).toEqual({
      h10: 0,
      h1: 0,
      m10: 0,
      m1: 3,
      s10: 0,
      s1: 0
    })
  })

  it('throw if format is wrong', () => {
    expect(() => {
      timer.setTimeFromMsec('00:03:00')
    }).toThrow()
  })
})
