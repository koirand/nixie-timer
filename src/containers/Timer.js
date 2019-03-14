import { Container } from 'unstated'

export default class ClockContainer extends Container {
  state = {
    time: {
      h10: 0,
      h1: 0,
      m10: 0,
      m1: 3,
      s10: 0,
      s1: 0
    }
  }

  getMSec = () => {
    const time = this.state.time
    const mSec = new Date(
      '1970/01/01 ' +
      time.h10 + time.h1 + ':' +
      time.m10 + time.m1 + ':' +
      time.s10 + time.s1 + 'Z'
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
      time: {
        h10: Math.floor((sec % 360000) / 36000),
        h1: Math.floor((sec % 36000) / 3600),
        m10: Math.floor((sec % 3600) / 600),
        m1: Math.floor((sec % 600) / 60),
        s10: Math.floor((sec % 60) / 10),
        s1: sec % 10
      }
    })
  }

  action (type) {
    switch (type) {
      case 'START':
        this.endMSec = (new Date()).getTime() + this.getMSec()
        this.tick()
        break
      default:
    }
  }

  tick () {
    // endTimeまでの時間を計算してdisplayTimeを更新
    const nowMSec = new Date().getTime()
    const remaininMSec = this.endMSec - nowMSec
    if (remaininMSec >= 0) {
      this.setTimeFromMsec(remaininMSec)
      window.requestAnimationFrame(this.tick.bind(this))
    }
  }
}
