import React from 'react'
import { Subscribe } from 'unstated'
import { default as Timer, Status } from '../containers/Timer'
import styles from './Arrow.module.css'

interface ArrowProps {
  type: string,
  value: string
}

const Arrow = (props: ArrowProps) => {
  const imageSource = (props.type === 'INCREMENT')
    ? process.env.PUBLIC_URL + '/images/arrow-up.png'
    : process.env.PUBLIC_URL + '/images/arrow-down.png'

  return (
    <Subscribe to={[Timer]}>
      {(timer: Timer) => {
        return (
          <img
            className={styles.arrow}
            style={{
              visibility: timer.state.status === Status.STOPPED ? 'visible' : 'hidden',
              opacity: timer.state.status === Status.STOPPED ? 1 : 0
            }}
            src={imageSource}
            alt={props.type}
            onClick={() => {
              timer.action(props.type, props.value)
            }}
          />
        )
      }}
    </Subscribe>
  )
}

export default Arrow
