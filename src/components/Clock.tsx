import React from 'react'
import { Subscribe } from 'unstated'
import Timer from '../containers/Timer'
import Digit from './Digit'
import Arrow from './Arrow'
import styles from './Clock.module.css'

const Clock = () => (
  <Subscribe to={[Timer]}>
    {(timer: Timer) => {
      return (
        <div className={styles.clock}>
          <table>
            <tbody>
              <tr>
                <td><Arrow type='INCREMENT' value='h10' /></td>
                <td><Arrow type='INCREMENT' value='h1' /></td>
                <td></td>
                <td><Arrow type='INCREMENT' value='m10' /></td>
                <td><Arrow type='INCREMENT' value='m1' /></td>
                <td></td>
                <td><Arrow type='INCREMENT' value='s10' /></td>
                <td><Arrow type='INCREMENT' value='s1' /></td>
              </tr>
              <tr>
                <td><Digit value={String(timer.state.h10)} /></td>
                <td><Digit value={String(timer.state.h1)} /></td>
                <td><Digit value={':'} /></td>
                <td><Digit value={String(timer.state.m10)} /></td>
                <td><Digit value={String(timer.state.m1)} /></td>
                <td><Digit value={':'} /></td>
                <td><Digit value={String(timer.state.s10)} /></td>
                <td><Digit value={String(timer.state.s1)} /></td>
              </tr>
              <tr>
                <td><Arrow type='DECREMENT' value='h10' /></td>
                <td><Arrow type='DECREMENT' value='h1' /></td>
                <td></td>
                <td><Arrow type='DECREMENT' value='m10' /></td>
                <td><Arrow type='DECREMENT' value='m1' /></td>
                <td></td>
                <td><Arrow type='DECREMENT' value='s10' /></td>
                <td><Arrow type='DECREMENT' value='s1' /></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }}
  </Subscribe>
)

export default Clock
