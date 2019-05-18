import React from 'react'
import { Subscribe } from 'unstated'
import Clock from './Clock'
import StartButton from './StartButton'
import { default as Timer, Status } from '../containers/Timer'
import styles from './App.module.css'

const App = () => (
  <Subscribe to={[Timer]}>
    {(timer: Timer) =>
      <div>
        <header
          className={styles.header}
          style={{
            visibility: timer.state.status === Status.STOPPED ? 'visible' : 'hidden',
            opacity: timer.state.status === Status.STOPPED ? 1 : 0
          }}
        >
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
          <div
            className={styles.buttonContainer}
            style={{
              visibility: timer.state.status === Status.STOPPED ? 'visible' : 'hidden',
              opacity: timer.state.status === Status.STOPPED ? 1 : 0
            }}
          >
            <StartButton />
          </div>
        </div>
      </div>
    }
  </Subscribe>
)

export default App
