import React from 'react'
import styles from './Digit.module.css'

interface DigitProps {
  value: string
}

const Digit = (props: DigitProps) => {
  const imageSource = process.env.PUBLIC_URL + '/images/' + props.value + '.png'
  return (
    <div>
      <img className={styles.digit} src={imageSource} alt={props.value} />
    </div>
  )
}

export default Digit
