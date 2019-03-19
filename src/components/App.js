import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Subscribe } from 'unstated'
import Clock from './Clock'
import StartButton from './StartButton'
import Timer from '../containers/Timer.js'
import styles from './App.module.css'

class App extends Component {
  componentDidMount = () => {
    window.onclick = () => {
      this.props.timer.action('STOP')
    }
  }

  render () {
    return (
      <div>
        <header
          className={styles.header}
          style={{
            visibility: this.props.timer.state.status === 'STOPPED' ? '' : 'hidden',
            opacity: this.props.timer.state.status === 'STOPPED' ? 1 : 0
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
              visibility: this.props.timer.state.status === 'STOPPED' ? '' : 'hidden',
              opacity: this.props.timer.state.status === 'STOPPED' ? 1 : 0
            }}
          >
            <StartButton />
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  timer: PropTypes.shape({
    action: PropTypes.func.isRequired,
    state: PropTypes.shape({
      status: PropTypes.string.isRequired
    })
  }).isRequired
}

// HOC
const AppWrapper = () => (
  <Subscribe to={[Timer]}>
    {timer => <App timer={timer} />}
  </Subscribe>
)

export default AppWrapper
