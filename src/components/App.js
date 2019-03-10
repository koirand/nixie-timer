import React, { Component } from 'react'
import Clock from './Clock'
import styles from './App.module.css'

class App extends Component {
  render () {
    return (
      <div className={styles.app} >
        <div>
          <Clock />
        </div>
      </div>
    )
  }
}

export default App
