import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'unstated'
import StartButton from './StartButton'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider>
      <StartButton />
    </Provider>
    , div
  )
  ReactDOM.unmountComponentAtNode(div)
})
