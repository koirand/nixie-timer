import React from 'react'
import { Subscribe } from 'unstated'
import Timer from '../containers/Timer'
import styles from './StartButton.module.css'

const Button = () => (
  <Subscribe to={[Timer]}>
    {(timer: Timer) => {
      return (
        <div
          className={styles.startButton}
          onClick={(e) => {
            e.stopPropagation()
            timer.action('START')
          }}
        >
          START
        </div>
      )
    }}
  </Subscribe>
)

export default Button
