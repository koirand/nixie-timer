import React, { Component } from 'react'
import { Subscribe } from 'unstated'
import Timer from '../containers/Timer'
import Digit from './Digit'
import styles from './Clock.module.css'

class Clock extends Component {
  render () {
    return (
      <Subscribe to={[Timer]}>
        {timer => {
          const time = timer.state.time
          return (
            <div className={styles.clock}>
              <Digit value={String(time.h10)} />
              <Digit value={String(time.h1)} />
              <Digit value={':'} />
              <Digit value={String(time.m10)} />
              <Digit value={String(time.m1)} />
              <Digit value={':'} />
              <Digit value={String(time.s10)} />
              <Digit value={String(time.s1)} />
            </div>
          )
        }}
      </Subscribe>
    )
  }
}

export default Clock
