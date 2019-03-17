import React from 'react'
import { Subscribe } from 'unstated'
import Timer from '../containers/Timer'
import styles from './Button.module.css'

const Button = () => {
  return (
    <Subscribe to={[Timer]}>
      {timer => {
        const type = timer.state.status === 'STOPPED' ? 'START' : 'STOP'
        return (
          <div
            className={styles.button}
            onClick={() => timer.action(type)}
          >
            {type}
          </div>
        )
      }}
    </Subscribe>
  )
}

export default Button
