import { Container } from 'unstated'
import { timeToString } from '../lib/TimeUtil'

export default class ClockContainer extends Container {
  constructor () {
    super()
    this.state = {
      displayTime: '00:03:00'
    }
  }

  action (type) {
    switch (type) {
      case 'START':
        this.endTime = (new Date()).getTime() + (1000 * 60 * 3)
        this.tick()
        break
      default:
    }
  }

  tick () {
    // endTimeまでの時間を計算してdisplayTimeを更新
    const nowTime = new Date().getTime()
    const remaininTime = this.endTime - nowTime
    if (remaininTime >= 0) {
      this.setState({
        displayTime: timeToString(remaininTime)
      })
      window.requestAnimationFrame(this.tick.bind(this))
    }
  }
}
