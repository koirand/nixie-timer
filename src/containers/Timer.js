import { Container } from 'unstated'

export default class ClockContainer extends Container {
  constructor () {
    super()
    this.state = {
      displayTime: '00:03:00'
    }
  }

  stringToTime = string => {
    const time = new Date('1970/01/01 ' + string + 'Z').getTime()
    if (isNaN(time)) {
      throw new Error('Invalid param')
    }
    return time
  }

  timeToString = time => {
    const string = new Date(time).toISOString()
    return (
      string.slice(11, 13) + ':' +
      string.slice(14, 16) + ':' +
      string.slice(17, 19)
    )
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
        displayTime: this.timeToString(remaininTime)
      })
      window.requestAnimationFrame(this.tick.bind(this))
    }
  }
}
