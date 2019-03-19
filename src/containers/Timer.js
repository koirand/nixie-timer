import { Container } from 'unstated'

export default class ClockContainer extends Container {
  state = {
    status: 'STOPPED',
    h10: 0,
    h1: 0,
    m10: 0,
    m1: 3,
    s10: 0,
    s1: 0
  }

  requestId = null

  getMSec = () => {
    const mSec = new Date(
      '1970/01/01 ' +
      this.state.h10 + this.state.h1 + ':' +
      this.state.m10 + this.state.m1 + ':' +
      this.state.s10 + this.state.s1 + 'Z'
    ).getTime()

    if (isNaN(mSec)) {
      throw new Error('Invalid param')
    }
    return mSec
  }

  setTimeFromMsec = mSec => {
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

  action (type, value) {
    switch (type) {
      case 'START':
        this.setState({ status: 'RUNNING' })
        this.endMSec = (new Date()).getTime() + this.getMSec()
        this.tick()
        break
      case 'STOP':
        this.setState({ status: 'STOPPED' })
        if (this.requestId) {
          window.cancelAnimationFrame(this.requestId)
        }
        break
      case 'INCREMENT': {
        const newState = {}
        if (this.state.status === 'STOPPED') {
          if (value === 'm10' || value === 's10') {
            newState[value] = (this.state[value] + 1) % 6
          } else {
            newState[value] = (this.state[value] + 1) % 10
          }
          this.setState(newState)
        }
        break
      }
      case 'DECREMENT': {
        const newState = {}
        if (this.state.status === 'STOPPED') {
          if (value === 'm10' || value === 's10') {
            newState[value] = (this.state[value] + 5) % 6
          } else {
            newState[value] = (this.state[value] + 9) % 10
          }
          this.setState(newState)
        }
        break
      }
      default:
    }
  }

  tick () {
    // endTimeまでの時間を計算してdisplayTimeを更新
    const nowMSec = new Date().getTime()
    const remaininMSec = this.endMSec - nowMSec
    if (remaininMSec >= 0) {
      this.setTimeFromMsec(remaininMSec)
      this.requestId = window.requestAnimationFrame(this.tick.bind(this))
    }
  }
}
