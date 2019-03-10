import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'unstated'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider>
      <App />
    </Provider>
    , div
  )
  ReactDOM.unmountComponentAtNode(div)
})
