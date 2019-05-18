import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'unstated'
import Clock from './Clock'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider>
      <Clock />
    </Provider>
    , div
  )
  ReactDOM.unmountComponentAtNode(div)
})
