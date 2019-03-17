import React, { Component } from 'react'
import Clock from './Clock'
import Button from './Button'
import styles from './App.module.css'

class App extends Component {
  render () {
    return (
      <div className={styles.app} >
        <header className={styles.header}>
          <h1 className={styles.title}>nixie-timer</h1>
          <i
            className={'fab fa-github ' + styles.github}
            onClick={() => { window.location.href = 'https://github.com/koirand/nixie-timer' }}
          />
        </header>
        <div>
          <Clock />
          <div className={styles.buttonContainer}>
            <Button />
          </div>
        </div>
      </div>
    )
  }
}

export default App
