import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Subscribe } from 'unstated'
import Timer from '../containers/Timer'
import Digit from './Digit'
import styles from './Clock.module.css'

class Clock extends Component {
  componentDidMount () {
    this.props.timer.countDown()
  }

  render () {
    const displayTime = this.props.timer.state.displayTime
    return (
      <div className={styles.clock}>
        <Digit value={displayTime.slice(0, 1)} />
        <Digit value={displayTime.slice(1, 2)} />
        <Digit value={displayTime.slice(2, 3)} />
        <Digit value={displayTime.slice(3, 4)} />
        <Digit value={displayTime.slice(4, 5)} />
        <Digit value={displayTime.slice(5, 6)} />
        <Digit value={displayTime.slice(6, 7)} />
        <Digit value={displayTime.slice(7, 8)} />
      </div>
    )
  }
}

Clock.propTypes = {
  timer: PropTypes.shape({
    countDown: PropTypes.func.isRequired,
    state: PropTypes.shape({
      displayTime: PropTypes.string.isRequired
    })
  }).isRequired
}

// HOC
const ClockWrapper = (props) => (
  <Subscribe to={[Timer]}>
    {timer => <Clock {...props} timer={timer} />}
  </Subscribe>
)

export default ClockWrapper
