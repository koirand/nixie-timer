import { Container } from 'unstated'

export enum Status {
  RUNNING,
  STOPPED
}

interface TimerState {
  status: Status,
  h10: number,
  h1: number,
  m10: number,
  m1: number,
  s10: number,
  s1: number
}

export default class Timer extends Container<TimerState> {
  requestId : number
  endMSec: number

  constructor () {
    super()
    this.requestId = 0
    this.endMSec = 0
    this.state = {
      status: Status.STOPPED,
      h10: 0,
      h1: 0,
      m10: 0,
      m1: 0,
      s10: 0,
      s1: 0
    }

    window.onclick = () => {
      this.action('STOP')
    }
  }

  getMSec = () => {
    const mSec =
      this.state.h10 * 36000000 +
      this.state.h1 * 3600000 +
      this.state.m10 * 600000 +
      this.state.m1 * 60000 +
      this.state.s10 * 10000 +
      this.state.s1 * 1000

    if (isNaN(mSec)) {
      throw new Error('Invalid param')
    }
    return mSec
  }

  setTimeFromMsec = (mSec: number) => {
    if (isNaN(mSec)) {
      throw new Error('Invalid param')
    }
    const sec = Math.floor(mSec / 1000)
    this.setState({
      h10: Math.floor((sec % 360000) / 36000),
      h1: Math.floor((sec % 36000) / 3600),
      m10: Math.floor((sec % 3600) / 600),
      m1: Math.floor((sec % 600) / 60),
      s10: Math.floor((sec % 60) / 10),
      s1: sec % 10
    })
  }

  action = (type: string, value?: string) => {
    switch (type) {
      case 'START':
        this.setState({ status: Status.RUNNING })
        this.endMSec = (new Date()).getTime() + this.getMSec()
        this.tick()
        break
      case 'STOP':
        this.setState({ status: Status.STOPPED })
        if (this.requestId) {
          window.cancelAnimationFrame(this.requestId)
        }
        break
      case 'INCREMENT': {
        const newState = {}
        if (this.state.status === Status.STOPPED) {
          if (value === 'm10' || value === 's10') {
            newState[value] = (this.state[value] + 1) % 6
          } else if (value) {
            newState[value] = (this.state[value] + 1) % 10
          }
          this.setState(newState)
        }
        break
      }
      case 'DECREMENT': {
        const newState = {}
        if (this.state.status === Status.STOPPED) {
          if (value === 'm10' || value === 's10') {
            newState[value] = (this.state[value] + 5) % 6
          } else if (value) {
            newState[value] = (this.state[value] + 9) % 10
          }
          this.setState(newState)
        }
        break
      }
      default:
    }
  }

  tick = () => {
    // endTimeまでの時間を計算してdisplayTimeを更新
    const nowMSec = new Date().getTime()
    const remaininMSec = this.endMSec - nowMSec
    if (remaininMSec < 0) {
      this.setState({
        status: Status.STOPPED,
        h10: 0,
        h1: 0,
        m10: 0,
        m1: 0,
        s10: 0,
        s1: 0
      })
    } else {
      this.setTimeFromMsec(remaininMSec)
      this.requestId = window.requestAnimationFrame(this.tick.bind(this))
    }
  }
}
