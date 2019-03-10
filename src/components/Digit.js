import React from 'react'
import PropTypes from 'prop-types'
import styles from './Digit.module.css'

const Digit = props => {
  const imageSource = '/images/' + props.value + '.png'
  return (
    <div>
      <img className={styles.digit} src={imageSource} alt={props.value} />
    </div>
  )
}

Digit.propTypes = {
  value: PropTypes.string.isRequired
}

export default Digit
