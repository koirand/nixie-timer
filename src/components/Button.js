import React from 'react'
import PropTypes from 'prop-types'
import { Subscribe } from 'unstated'
import Timer from '../containers/Timer'
import styles from './Button.module.css'

const Button = props => {
  return (
    <Subscribe to={[Timer]}>
      {timer => {
        return (
          <span
            className={styles.button}
            onClick={() => timer.action(props.value)}
          >
            {props.value}
          </span>
        )
      }}
    </Subscribe>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired
}

export default Button
