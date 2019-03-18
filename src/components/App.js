import React, { Component } from 'react'
import Clock from './Clock'
import Button from './Button'
import styles from './App.module.css'

class App extends Component {
  render () {
    return (
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>
            nixie-timer
            <i
              className={'fab fa-github ' + styles.githubIcon}
              onClick={() => { window.location.href = 'https://github.com/koirand/nixie-timer' }}
            />
          </h1>
        </header>
        <div className={styles.main}>
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
