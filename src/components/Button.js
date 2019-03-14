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
          <div
            className={styles.button}
            onClick={() => timer.action(props.type)}
          >
            {props.type}
          </div>
        )
      }}
    </Subscribe>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired
}

export default Button
