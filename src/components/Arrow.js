import React from 'react'
import PropTypes from 'prop-types'
import { Subscribe } from 'unstated'
import Timer from '../containers/Timer'
import styles from './Arrow.module.css'

const Arrow = props => {
  const imageSource = (props.type === 'INCREMENT')
    ? process.env.PUBLIC_URL + '/images/arrow-up.png'
    : process.env.PUBLIC_URL + '/images/arrow-down.png'

  return (
    <Subscribe to={[Timer]}>
      {timer => {
        return (
          <img
            className={styles.arrow}
            style={{
              visibility: timer.state.status === 'STOPPED' ? '' : 'hidden',
              opacity: timer.state.status === 'STOPPED' ? 1 : 0
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

Arrow.propTypes = {
  type: PropTypes.string.isRequired
}

export default Arrow
