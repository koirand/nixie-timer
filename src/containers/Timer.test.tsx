import Timer from './Timer'

let timer
beforeEach(() => {
  timer = new Timer()
})

describe('getMSec', () => {
  it('get the correct milliseconds of time', async () => {
    await timer.setState({
      h10: 0,
      h1: 0,
      m10: 0,
      m1: 3,
      s10: 0,
      s1: 0
    })
    expect(timer.getMSec()).toBe(180000)
  })

  it('throw if format is wrong', async () => {
    await timer.setState({
      h10: 'x',
      h1: 0,
      m10: 0,
      m1: 3,
      s10: 0,
      s1: 0
    })
    expect(() => {
      timer.getMSec()
    }).toThrow()
  })
})

describe('setTimeFromMsec', () => {
  it('set time from milliseconds', async () => {
    await timer.setTimeFromMsec(180000)
    expect(timer.state).toMatchObject({
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

it('execute start action', () => {
  timer.action('START')
})

it('execute start action', async () => {
  await timer.setState({
    h10: 5,
    h1: 0,
    m10: 0,
    m1: 0,
    s10: 0,
    s1: 0
  })
  await timer.action('INCREMENT', 'h10')
  expect(timer.state.h10).toBe(6)

  await timer.setState({
    h10: 0,
    h1: 0,
    m10: 5,
    m1: 0,
    s10: 0,
    s1: 0
  })
  await timer.action('INCREMENT', 'm10')
  expect(timer.state.m10).toBe(0)
})

it('execute start action', async () => {
  await timer.setState({
    h10: 0,
    h1: 0,
    m10: 0,
    m1: 0,
    s10: 0,
    s1: 0
  })
  await timer.action('DECREMENT', 'h10')
  expect(timer.state.h10).toBe(9)

  await timer.setState({
    h10: 0,
    h1: 0,
    m10: 0,
    m1: 0,
    s10: 0,
    s1: 0
  })
  await timer.action('DECREMENT', 'm10')
  expect(timer.state.m10).toBe(5)
})
