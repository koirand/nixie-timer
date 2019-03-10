import Timer from './Timer'

it('work without error', () => {
  const timer = new Timer()
  expect(timer.state.displayTime).toEqual('00:03:00')
  timer.action('START')
})
