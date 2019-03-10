import React, { Component } from 'react'
import Clock from './Clock'
import Button from './Button'
import styles from './App.module.css'

class App extends Component {
  render () {
    return (
      <div className={styles.app} >
        <div>
          <Clock />
          <div className={styles.buttonContainer}>
            <Button value='START' />
          </div>
        </div>
      </div>
    )
  }
}

export default App
